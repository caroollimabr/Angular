import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostIdComponent } from './post-id/post-id.component';


const routes: Routes = [
  {path: 'post-list', component: PostListComponent },
  {path: 'post-id', component: PostIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
