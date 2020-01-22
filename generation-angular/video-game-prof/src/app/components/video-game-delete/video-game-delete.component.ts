import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game/video-game.service';
import { VideoGame } from 'src/app/models/video-game';

@Component({
  selector: 'app-video-game-delete',
  templateUrl: './video-game-delete.component.html',
  styleUrls: ['./video-game-delete.component.css']
})
export class VideoGameDeleteComponent implements OnInit {

  videoGame:VideoGame = new VideoGame(0, '', '', null);
  constructor(private route: ActivatedRoute
    , private videoGameService: VideoGameService,
    private router: Router) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    this.findById(id);
  }

  findById(id: number){
    this.videoGameService.getById(id).subscribe((videoGame: VideoGame) => {
      this.videoGame = videoGame;
    });
  }

  btnSim(){
    this.videoGameService.delete(this.videoGame.id).subscribe((response:string)=>{
      this.router.navigate(['/video-game-listar']);
    }, err => {
      console.log(err);
    });
  }

  btnNao(){
    this.router.navigate(['/video-game-listar']);
  }
}
