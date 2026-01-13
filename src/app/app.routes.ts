import { Routes } from '@angular/router';
import { Dashboard } from './features/components/dashboard/dashboard';
import { BookView } from './features/components/book-view/book-view';
import { EditBook } from './features/components/edit-book/edit-book';
import { AddBook } from './features/components/add-book/add-book';


export const routes: Routes = [
    { path: '', redirectTo: 'book-view', pathMatch: 'full' },
    { path: 'book-view', component: BookView },
    { 
        path: 'dashboard', 
        component: Dashboard,
        children : [
            { path: 'add' , component : AddBook },
            { path: 'edit' , component: EditBook }
        ]
    },
];
