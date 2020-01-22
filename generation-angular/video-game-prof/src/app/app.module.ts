import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameListarComponent } from './components/video-game-listar/video-game-listar.component';
import { VideoGameNovoComponent } from './components/video-game-novo/video-game-novo.component';
import { VideoGameDeleteComponent } from './components/video-game-delete/video-game-delete.component';
import { VideoGameService } from './services/video-game/video-game.service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameListarComponent,
    VideoGameNovoComponent,
    VideoGameDeleteComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VideoGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
