import { Component, OnInit } from '@angular/core';
import { MarvelList } from 'src/app/MarvelList';
import { MarvelSService } from '../marvel-s.service';

@Component({
  selector: 'app-marvel-events',
  templateUrl: './marvel-events.component.html',
  styleUrls: ['./marvel-events.component.css']
})
export class MarvelEventsComponent implements OnInit {

  events: MarvelList[]

  constructor(private marvelS: MarvelSService) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(){
    this.marvelS.ts = []
    this.marvelS.TodosOsEvents()
    this.events = this.marvelS.ts

  }

}
