import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LibraryModule } from './library/library.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home'}
  },
  {
    path: '*',
    redirectTo: '/books'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
