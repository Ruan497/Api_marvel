import { Component, OnInit } from '@angular/core';
import { MarvelList } from 'src/app/MarvelList';
import { MarvelSService } from '../marvel-s.service';

@Component({
  selector: 'app-marvel-comics',
  templateUrl: './marvel-comics.component.html',
  styleUrls: ['./marvel-comics.component.css']
})
export class MarvelComicsComponent implements OnInit {

  comics: MarvelList[]

  constructor(private marvelS: MarvelSService) { }

  ngOnInit(): void {
    this.getComics()
  }
  getComics(){
    this.marvelS.ts = []
    this.marvelS.TodasOsComics()
    this.comics = this.marvelS.ts
  }

}
