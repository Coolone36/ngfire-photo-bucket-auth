import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './+signin/signin.component';
import { PhotoDetailComponent } from './+photodetail/photodetail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'signin', component: SigninComponent},
  { path: 'photo', component: PhotoDetailComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
