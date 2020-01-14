import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { UserIdComponent } from './user-id/user-id.component';
import { PostIdComponent } from './post-id/post-id.component';
import { CommentsIdComponent } from './comments-id/comments-id.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    UserListComponent,
    PostListComponent,
    CommentsListComponent,
    UserIdComponent,
    PostIdComponent,
    CommentsIdComponent,
    ComponentesComponent,
    NavbarComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
