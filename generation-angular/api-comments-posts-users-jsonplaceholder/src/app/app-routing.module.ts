import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsIdComponent } from './comments-id/comments-id.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostIdComponent } from './post-id/post-id.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'user-id', component: UserIdComponent },
  {path: 'user-list', component: UserListComponent },
  {path: 'post-id', component: PostIdComponent },
  {path: 'post-list', component: PostListComponent  },
  {path: 'comments-id', component: CommentsIdComponent  },
  {path: 'comments-list', component: CommentsListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
