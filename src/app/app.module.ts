import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompletedPageComponent } from './components/completed-page/completed-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletedPageComponent,
    UsersPageComponent,
    SingleTodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
