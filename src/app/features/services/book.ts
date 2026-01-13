import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Book {

  private _baseUrl = 'http://localhost:3000/api/books';

  constructor(private _http : HttpClient) {}

  getBooks() {
    return this._http.get(`${this._baseUrl}/getAllBooks`);
  }

  addBooks(book : any) : Observable <any>{
    return this._http.post(`${this._baseUrl}/add` , book)
  }

  getBookById(id : any){
    return this._http.get(`${this._baseUrl}/getById/${id}`)
  }

  updateBookById(id : any, book : any){
    return this._http.put(`${this._baseUrl}/updateById/${id}`, book)
  }


  deleteBook(id : any){
    return this._http.delete(`${this._baseUrl}/deleteById/${id}`)
  }

}
