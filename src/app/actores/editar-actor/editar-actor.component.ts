import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = { nombre: 'Mafalda', fechaNacimiento: new Date(), foto: 'https://images-na.ssl-images-amazon.com/images/I/81DFyiTVV2L.__AC_SX300_SY300_QL70_ML2_.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
