import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books/books.service';
import { 
  FormControl, 
  FormGroupDirective, 
  FormBuilder, 
  FormGroup, 
  NgForm, 
  Validators } from '@angular/forms';

import { 
  faBars,
  faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  //fa-icons
  faBars = faBars;
  faSave = faSave;

  bookForm: FormGroup;
  isbn:string='';
  title:string='';
  description:string='';
  author:string='';
  publisher:string='';
  published_year:string='';

  constructor(
    private router: Router, 
    private api: BooksService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    //add validations
    this.bookForm = this.formBuilder.group({
      'isbn' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publisher' : [null, Validators.required],
      'published_year' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
