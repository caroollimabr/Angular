import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoGame } from 'src/app/models/video-game';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`http://localhost:8080/videoGame`);
  }

  getById(id: number){
    return this.http.get(`http://localhost:8080/videoGame/${id}`);
  }

  insert(videoGame: VideoGame){
    return this.http.post(`http://localhost:8080/videoGame`, videoGame);
  }

  update(videoGame: VideoGame){
    return this.http.put(`http://localhost:8080/videoGame`, videoGame);
  }

  delete(id: number){
    return this.http.delete(`http://localhost:8080/videoGame/${id}`);
  }
}
