import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostIdComponent } from './post-id/post-id.component';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component'


@NgModule({
  declarations: [
    AppComponent,
    PostIdComponent,
    PostListComponent
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
