import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game/video-game.service';
import { VideoGame } from 'src/app/models/video-game';

@Component({
  selector: 'app-video-game-novo',
  templateUrl: './video-game-novo.component.html',
  styleUrls: ['./video-game-novo.component.css']
})
export class VideoGameNovoComponent implements OnInit {

  novo: boolean = false;
  videoGame:VideoGame = new VideoGame(0, '', '', null);
  constructor(private route: ActivatedRoute, private videoGameService: VideoGameService) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
    if(id == undefined){
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }
  }

  findById(id: number){
    this.videoGameService.getById(id).subscribe((videoGame: VideoGame) =>{
     this.videoGame = videoGame; 
    }, err => {
      console.log(`Erro cod: ${err.status}`);
    });
  }

  salvar(){
    if(this.novo){
      this.videoGameService.insert(this.videoGame).subscribe((videoGame: VideoGame) =>{
        this.videoGame = videoGame;
        this.novo = false;
      });
    } else {
      this.videoGameService.update(this.videoGame).subscribe((videoGame: VideoGame) =>{
        this.videoGame = videoGame;
      });
    }
  }

}
