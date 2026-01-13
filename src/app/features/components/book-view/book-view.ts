import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Book } from '../../services/book';

@Component({
  selector: 'app-book-view',
  imports: [CommonModule], 
  templateUrl: './book-view.html',
  styleUrl: './book-view.css', 
  standalone: true
})
export class BookView implements OnInit {

  viewMode: 'grid' | 'list' = 'grid';

  setView(mode: 'grid' | 'list'){
    this.viewMode = mode
  }

  books: any = [];

  constructor(private bookService: Book, private _route : ActivatedRoute) {}

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
      const searchQuery = params['q'];
      if (searchQuery) {
        this.bookService.getBooks().subscribe((data: any) => {
          this.books = data.filter((book: any) => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.publishedYear.toString().includes(searchQuery)
          );
        });
      } else {
        this.loadBooks();
      } 
    });
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  filterBooks(event: any) {
    const query = event.target.value.toLowerCase();
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data.filter((book: any) => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
      );
    });
  }

  // books : any = [
  //   {
  //     "title": "Book 1",
  //     "author": "Author 1",
  //     "genre": "Fiction",
  //     "published": 2020,
  //     "rating": 4
  //   },
  //   {
  //     "title": "Book 2",
  //     "author": "Author 2",
  //     "genre": "Non-Fiction",
  //     "published": 2019,
  //     "rating": 5 
  //   },
  //   {
  //     "title": "Book 3",
  //     "author": "Author 3",
  //     "genre": "Science Fiction",
  //     "published": 2021,
  //     "rating": 3 
  //   },
  //   {
  //     "title": "Book 4",
  //     "author": "Author 4",
  //     "genre": "Mystery",
  //     "published": 2022,
  //     "rating": 4
  //   },
  //   {
  //     "title": "Book 5",
  //     "author": "Author 5",
  //     "genre": "Fantasy",
  //     "published": 2018,
  //     "rating": 5
  //   },
  //   {
  //     "title": "Book 6",
  //     "author": "Author 6",
  //     "genre": "Biography",
  //     "published": 2017,
  //     "rating": 4
  //   }

  // ]

  





}