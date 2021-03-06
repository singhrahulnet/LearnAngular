import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {DetailsComponent} from './details/details.component';
import { compileComponentFromMetadata } from '@angular/compiler';


const routes: Routes = [
{
  path:'',
  component:UsersComponent
},

{
  path: 'details/:id',
  component:DetailsComponent
},
{
path:'posts',
component: PostsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
