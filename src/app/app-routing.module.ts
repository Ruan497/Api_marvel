import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MarvelCharsComponent} from './marvel/marvel-chars/marvel-chars.component'
import {MarvelComicsComponent} from './marvel/marvel-comics/marvel-comics.component'
import {MarvelEventsComponent} from './marvel/marvel-events/marvel-events.component'
import {MarvelSeriesComponent} from'./marvel/marvel-series/marvel-series.component'
import {MarvelStoriesComponent} from './marvel/marvel-stories/marvel-stories.component'


const routes: Routes = [{
  path: "characters",
  component: MarvelCharsComponent
},
{
  path: "comics",
  component: MarvelComicsComponent
},
{
  path:"events",
  component: MarvelEventsComponent
},
{
  path: "series",
  component: MarvelSeriesComponent

},
{
  path: "stories",
  component: MarvelStoriesComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
