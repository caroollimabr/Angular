import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGameListarComponent } from './components/video-game-listar/video-game-listar.component';
import { VideoGameNovoComponent } from './components/video-game-novo/video-game-novo.component';
import { VideoGameDeleteComponent } from './components/video-game-delete/video-game-delete.component';


const routes: Routes = [
  {path: 'video-game-listar', component: VideoGameListarComponent},
  {path: 'video-game-novo', component: VideoGameNovoComponent},
  {path: 'video-game-novo/:id', component: VideoGameNovoComponent},
  {path: 'video-game-deletar/:id', component: VideoGameDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
