import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';
import { Foto } from './foto';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {

  fotos: Foto[] = [];

  constructor(private fotosService:FotosService) { }

  ngOnInit(): void {
    this.fotosService.getFotos().subscribe(data => {
      console.log(data)
      this.fotos = data;
    });
  }

}
