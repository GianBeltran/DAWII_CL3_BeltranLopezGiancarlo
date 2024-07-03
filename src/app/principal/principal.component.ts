import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router:Router, private route:ActivatedRoute){
  }

  irHome(): void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irEpisodios(): void{
    this.router.navigate(["episodios"], {relativeTo: this.route})
  }
  irFotos(): void{
    this.router.navigate(["fotos"], {relativeTo: this.route})
  }

}
