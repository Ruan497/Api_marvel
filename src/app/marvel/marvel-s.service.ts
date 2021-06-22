import { Injectable } from '@angular/core';
import { MarvelList } from '../MarvelList';

@Injectable({
  providedIn: 'root'
})
export class MarvelSService {

  ts: MarvelList[] = []
  t: MarvelList

  constructor() { }

  //DC é bem melhor

  urlapi: string = '?ts=1624304693&apikey=252a8a1fd96507a4b1f2bca8f9dc9952&hash=bdec3f647d1d58aef1caaa4423e8d68f&limit=1'
  url: string = 'http://gateway.marvel.com/v1/public/'

  TodosOsPersonagens() {
    this.chamarPersonagem(this.url + 'characters' + this.urlapi)
    
  }
  TodasOsComics(){
    this.chamarOutros(this.url + 'comics' + this.urlapi)
  }
  TodosOsEvents(){
    this.chamarOutros(this.url + 'events' + this.urlapi)
  }
  TodosOsSeries(){
    this.chamarOutros(this.url + 'series' + this.urlapi)
  }
  TodososStories(){
    this.chamarOutros(this.url + 'stories' + this.urlapi, 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg')
  }

  chamarPersonagem(url: string) {
    fetch(url).then((response) => {
      return response.json();
    }).then((jsonParsed)=> {
      jsonParsed.data.results.forEach(element => {
        const imgsrc = element.thumbnail.path + '.' + element.thumbnail.extension
        const nome = element.name
        const detalhes = element.urls[0].url
        this.t = new MarvelList(nome, imgsrc, detalhes)
        this.ts.push(this.t)
      });
      console.log(jsonParsed)
    }
    )
  }
  chamarOutros(url: string, img?: string){
    fetch(url).then((response) => {
      return response.json();
    }).then((jsonParsed)=> {
      jsonParsed.data.results.forEach(element => {
        
        if(img){
           const imgsrc = img
           const nome = element.title
           const detalhes = ''
           this.t = new MarvelList(nome, imgsrc, detalhes)
        } else {
          const imgsrc = element.thumbnail.path + '.' + element.thumbnail.extension
          const nome = element.title
          const detalhes = element.urls[0].url
          this.t = new MarvelList(nome, imgsrc, detalhes)
          console.log(imgsrc)
        }
        
        this.ts.push(this.t)
      });
      console.log(jsonParsed)
  
    }
    )
  }

}

