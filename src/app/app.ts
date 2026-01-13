
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme-service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, NgxSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentTheme : boolean = false
  protected readonly title = signal('book-management');

  constructor(private _route : Router, private _themeService : ThemeService) {
    
  }

  searchTerm = '';

  toggleTheme() {
    console.log(this.currentTheme)
    this.currentTheme = !this.currentTheme
    this._themeService.toggleTheme();
  }

  serchBooks() {
    this._route.navigate(['/book-view'], { queryParams: { q: this.searchTerm } });
  }




}
