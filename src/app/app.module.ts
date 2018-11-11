import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'
// import { SweetAlertService } from 'angular-sweetalert-service';
import { AuthGuard } from './auth/auth.guard';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { NavbarComponent } from './components/app/navbar/navbar.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { OrderComponent } from './components/order/order.component';

const appRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    AuthorListComponent,
    CategoryListComponent,
    PublisherListComponent,
    BookDetailComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
