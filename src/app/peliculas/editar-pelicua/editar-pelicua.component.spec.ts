import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPelicuaComponent } from './editar-pelicua.component';

describe('EditarPelicuaComponent', () => {
  let component: EditarPelicuaComponent;
  let fixture: ComponentFixture<EditarPelicuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPelicuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPelicuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
