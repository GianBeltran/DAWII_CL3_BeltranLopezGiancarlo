import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Foto } from './foto';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient:HttpClient) { }

  getFotos(): Observable<Foto[]>{
    return this.httpClient.get<Foto[]>(this.url).pipe(map(fotos => fotos.filter(foto => /^a|^r|^s/i.test(foto.title))));
  }
}
