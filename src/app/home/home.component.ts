import { Component, OnInit } from '@angular/core';

import { faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //fa-icons
  faBook = faBook;

  constructor() { }

  ngOnInit() {
  }

}
