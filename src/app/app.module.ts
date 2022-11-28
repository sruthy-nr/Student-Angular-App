import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"edit",
    component:StudentEditComponent
  },
  {
    path:"search",
    component:StudentSearchComponent
  },
  {
    path:"delete",
    component:StudentDeleteComponent
  },
  {
    path:"view",
    component:StudentViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentSearchComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
