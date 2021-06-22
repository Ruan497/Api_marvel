import { Component, OnInit } from '@angular/core';
import { MarvelList } from 'src/app/MarvelList';
import { MarvelSService } from '../marvel-s.service';

@Component({
  selector: 'app-marvel-series',
  templateUrl: './marvel-series.component.html',
  styleUrls: ['./marvel-series.component.css']
})
export class MarvelSeriesComponent implements OnInit {

  series: MarvelList[]

  constructor(private marvelS: MarvelSService){ }

  ngOnInit(): void {
    this.getSeries()
  }

  getSeries(){
    this.marvelS.ts = []
    this.marvelS.TodosOsSeries()
    this.series = this.marvelS.ts

  }

}
