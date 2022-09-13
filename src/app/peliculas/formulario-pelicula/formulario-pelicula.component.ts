import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { generoCreacionDTO } from 'src/app/generos/genero';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder) {

     }

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: PeliculaDTO

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];
  
  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[]; 
  generosSeleccionados: MultipleSelectorModel[] = [];
  cinesNoSeleccionados: MultipleSelectorModel[];
  cinesSeleccionados: MultipleSelectorModel[] = [];
  
  imagenCambiada = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {validators: [Validators.required]}],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: '',
      actores: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios() {
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    const actores = this.actoresSeleccionados.map(val => {
      return {id: val.id, personaje: val.personaje}
    });

    this.form.get('actores').setValue(actores);

    if(!this.imagenCambiada){
      this.form.patchValue({'poster': null});
    }

    this.OnSubmit.emit(this.form.value);
  }

}
