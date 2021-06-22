import { Component, OnInit } from '@angular/core';
import { MarvelList } from 'src/app/MarvelList';
import { MarvelSService } from '../marvel-s.service';

@Component({
  selector: 'app-marvel-stories',
  templateUrl: './marvel-stories.component.html',
  styleUrls: ['./marvel-stories.component.css']
})
export class MarvelStoriesComponent implements OnInit {

  stories: MarvelList[]

  constructor(private marvelS: MarvelSService) { }

  ngOnInit(): void {
    this.getStories()
  }

  getStories(){
    this.marvelS.ts = []
    this.marvelS.TodososStories()
    this.stories = this.marvelS.ts
  }

}
