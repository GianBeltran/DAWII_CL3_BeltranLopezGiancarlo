import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Episodio } from './episodio';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  private url = 'https://rickandmortyapi.com/api/episode';

  constructor(private httpClient:HttpClient) { }

  getEpisodios(): Observable<Episodio[]>{

    return this.httpClient.get<{info:any, results:Episodio[]}>(this.url)
    .pipe(map(response => response.results.filter(episodio => episodio.id%2 !== 0)));
  }
  
}
