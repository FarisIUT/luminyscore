import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from './services/auth.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ScoreViewComponent } from './score-view/score-view.component';
import { ScoreComponent } from './score/score.component';
import { ScoreService } from './services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    EditStudentComponent,
    MoncompteComponent,
    CreateAccountComponent,
    ScoreViewComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StudentService, AuthService, UserService, ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
