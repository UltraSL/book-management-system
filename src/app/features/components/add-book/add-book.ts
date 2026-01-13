import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../services/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {

  bookForm : FormGroup;
  title : String = ''
  author : string =''
  genre : string = ''
  publishedYear : string = ''
  rating : string =''

  constructor(private _fb : FormBuilder, private _bookService : Book) {
    this.bookForm = this._fb.group({
      title: ['' , [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)] ],
      genre: ['', Validators.required],
      publishedYear: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)] ],
      rating: ['', [Validators.required, Validators.min(1) , Validators.max(5)]]
    });
  }

  onSubmit() {
    if(this.bookForm.valid){

      const book = this.bookForm.value;
      console.log('Submitting Data: ', book)

      this._bookService.addBooks(book).subscribe({
        next : (message) => {
          console.log(message)
          alert("Succeffully Uploaded")
        },
        error : (error) => {
          console.log("Error Occured While Uploading", error)
          alert("Error Occured")
        }
      })
    }else {
      alert('Please fill all required fields correctly.');
    }
  }

}
