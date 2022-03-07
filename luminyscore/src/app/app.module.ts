import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from './services/auth.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MoncompteComponent } from './moncompte/moncompte.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    EditStudentComponent,
    NewUserComponent,
    MoncompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [StudentService,AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
