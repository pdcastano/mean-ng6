import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const bookRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Books list'}
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book details'}
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Book create'}
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Book edit'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
  ],
  providers: [],
  exports: [
    BookComponent //if we want to access to this component on app-component (now it is redirected)
  ]
})
export class LibraryModule { }
