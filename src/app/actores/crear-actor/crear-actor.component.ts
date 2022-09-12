import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { actorCreacionDTO } from '../actor';
import { ActoresService } from '../actores.service';
=======
import { actorCreacionDTO } from '../actor';
>>>>>>> b4386dbbf6fe6a69f1d64b77f2edb13820076703

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

<<<<<<< HEAD
  constructor(
    private actoresService: ActoresService,
    private router: Router) {

     }
=======
  constructor() { }
>>>>>>> b4386dbbf6fe6a69f1d64b77f2edb13820076703

  ngOnInit(): void {
  }

<<<<<<< HEAD
  errores: string[] = [];
  
  guardarCambios(actor: actorCreacionDTO){
    this.actoresService.crear(actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, errores => this.errores = parsearErroresAPI(errores))
=======
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
>>>>>>> b4386dbbf6fe6a69f1d64b77f2edb13820076703
  }
}
