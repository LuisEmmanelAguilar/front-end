import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    //this.cargarDatos();
  }
  
  peliculasEnCines: PeliculaDTO[];
  peliculasProximosEstrenos: PeliculaDTO[];

  cargarDatos(){
  }

}
