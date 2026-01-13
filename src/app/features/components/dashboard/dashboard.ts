import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { Book } from '../../services/book';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  

}
