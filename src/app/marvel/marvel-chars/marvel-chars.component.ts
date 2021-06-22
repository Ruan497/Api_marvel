import { Component, OnInit } from '@angular/core';
import { MarvelList } from 'src/app/MarvelList';
import { MarvelSService } from '../marvel-s.service';

@Component({
  selector: 'app-marvel-chars',
  templateUrl: './marvel-chars.component.html',
  styleUrls: ['./marvel-chars.component.css']
})
export class MarvelCharsComponent implements OnInit {

  

  constructor(private marvelS: MarvelSService) { }
  personagens: MarvelList[]

  ngOnInit(): void {
    this.getChars()
  }

  getChars(){
    this.marvelS.ts = []
    this.marvelS.TodosOsPersonagens()
    this.personagens = this.marvelS.ts
  }



}
