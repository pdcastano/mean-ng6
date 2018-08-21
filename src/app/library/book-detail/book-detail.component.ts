import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books/books.service';

import { 
  faBars,
  faPencilAlt,
  faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  //fa-icons
  faBars = faBars;
  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;

  book:any = {};

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private api: BooksService
  ) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id'])
  }

  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }

  deleteBook(id) {
    this.api.deleteBook(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
