import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthComponent } from './auth/auth.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ScoreViewComponent } from './score-view/score-view.component';
import { MoncompteComponent } from './moncompte/moncompte.component';


const appRoutes: Routes =  [
  {path: '',pathMatch: 'full',redirectTo: 'auth'},
  { path: 'students',canActivate: [AuthGuard], component: StudentViewComponent },
  { path: 'score',canActivate: [AuthGuard], component: ScoreViewComponent },
  { path: 'compte',canActivate: [AuthGuard], component: MoncompteComponent },

  { path: 'users', canActivate: [AuthGuard],component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuard],component: NewUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditStudentComponent },
  { path: 'students/:id',canActivate: [AuthGuard], component: SingleStudentComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routedComponents = [StudentViewComponent, AuthComponent, SingleStudentComponent,UserListComponent];
