import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelCharsComponent } from './marvel/marvel-chars/marvel-chars.component';
import { MarvelComicsComponent } from './marvel/marvel-comics/marvel-comics.component';
import { MarvelSeriesComponent } from './marvel/marvel-series/marvel-series.component';
import { MarvelEventsComponent } from './marvel/marvel-events/marvel-events.component';
import { MarvelStoriesComponent } from './marvel/marvel-stories/marvel-stories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavcompComponent } from './navcomp/navcomp.component';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [   
    AppComponent,
    MarvelCharsComponent,
    MarvelComicsComponent,
    MarvelSeriesComponent,
    MarvelEventsComponent,
    MarvelStoriesComponent,
    NavcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
