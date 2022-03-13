import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { AuthGuard } from './services/auth-guard.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ScoreViewComponent } from './score-view/score-view.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SingleScoreComponent } from './single-score/single-score.component';
import { LeaguesManagerComponent } from './leagues-manager/leagues-manager.component';



const appRoutes: Routes =  [
  {path: '',pathMatch: 'full',redirectTo: 'auth'},
  { path: 'scores',canActivate: [AuthGuard], component: LeaguesManagerComponent  },
  { path: 'compte',canActivate: [AuthGuard], component: MoncompteComponent },

  { path: 'users', canActivate: [AuthGuard],component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuard],component: NewUserComponent },


  { path: 'auth', component: AuthComponent },
  { path: 'createaccount', component: CreateAccountComponent },

  { path: 'scores/:id',canActivate: [AuthGuard], component: SingleScoreComponent },

  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
export const routedComponents = [
  LeaguesManagerComponent,
  AuthComponent,
  SingleScoreComponent,
  UserListComponent,
];
