import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { BooksService } from '../services/books/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books:any;
  //Angular Material datasource variables
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.api);

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

//Angular Material Data Source 
export class BookDataSource extends DataSource<any> {
  constructor(private api: BooksService) {
    super()
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}
