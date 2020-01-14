import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentIdComponent } from './comment-id/comment-id.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  {path: 'comment-id', component: CommentIdComponent},
  {path: 'comment-list', component: CommentListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
