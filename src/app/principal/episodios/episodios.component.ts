import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { EpisodiosService } from './episodios.service';
import { CommonModule } from '@angular/common';
import { Episodio } from './episodio';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent {

  episodios: Episodio[] = [];
  displayColumns: string [] = ['id', 'name', 'air_date', 'episode', 'url', 'created']

  constructor(private episodiosService:EpisodiosService){
  }

  ngOnInit(): void {
    this.episodiosService.getEpisodios().subscribe(data => {
      console.log(data)
      this.episodios = data;
    });
  }

}
