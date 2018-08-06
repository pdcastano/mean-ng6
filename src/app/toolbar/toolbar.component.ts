import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [AuthService]
})
export class ToolbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {}

  public isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  public login() {
    this.auth.login();
  }

  public logout() {
    this.auth.logout();
  }

}