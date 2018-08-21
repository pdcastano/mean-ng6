import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from '../services/books/books.service';
import { 
  faPlus,
  faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  //fa-icons definition
  faPlus = faPlus;
  faEye = faEye;

  books:any;
  
  constructor(private api:BooksService) { }
  
  ngOnInit() {
    this.api.getBooks()
      .subscribe(res => {
        console.log('Books',res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }

}