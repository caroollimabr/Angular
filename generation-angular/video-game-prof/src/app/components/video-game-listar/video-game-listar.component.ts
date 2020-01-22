import { Component, OnInit } from '@angular/core';
import { VideoGameService } from 'src/app/services/video-game/video-game.service';
import { VideoGame } from 'src/app/models/video-game';

@Component({
  selector: 'app-video-game-listar',
  templateUrl: './video-game-listar.component.html',
  styleUrls: ['./video-game-listar.component.css']
})
export class VideoGameListarComponent implements OnInit {

  videoGames = []
  constructor(private videoGameService: VideoGameService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.videoGameService.getAll().subscribe((videoGames: VideoGame[])=>{
      this.videoGames = videoGames;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    });
  }

}
