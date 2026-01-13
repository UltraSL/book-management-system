import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  imports: [ CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css',
})
export class EditBook implements OnInit{

  books : any = []
  updatedBooks : any = []
  editForm : FormGroup

  title : string = ''

  selectedBook : any | null = null


  constructor(private _bookService : Book, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      title: ['' , [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)] ],
      genre: ['', Validators.required],
      publishedYear: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)] ],
      rating: ['', [Validators.required, Validators.min(1) , Validators.max(5)]]
    });
  }

  setFormValues(book: any) {
    this.editForm.patchValue({
      title: book.title,
      author: book.author,
      genre: book.genre,
      publishedYear: book.publishedYear,
      rating: book.rating
    });
  }

  ngOnInit() : void {
    this.getAllBookList()
  }

  getAllBookList(){
    this._bookService.getBooks().subscribe((res)=>{
      this.books= res
    })
  }

  deleteBook(id : any, title : string){
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    this._bookService.deleteBook(id).subscribe({
      next: () => {
        this.getAllBookList()
        //console.log(this.books)
      },
      error: () => {
        alert("Error deleting the file")
      }
    })
  }

  getBookbyId(id : any) {
    this._bookService.getBookById(id).subscribe((res)=>{
      this.selectedBook=res
      this.setFormValues(res)
      
    })
  }

  updateBook(id: any){
    this._bookService.updateBookById(id, this.editForm.value).subscribe({
      next : () => {
        //this.getAllBookList()
        alert('Successfully Updated')
      },
      error: () => alert('Error Updating, Please Check All Fields')
    });
  }

  

}
