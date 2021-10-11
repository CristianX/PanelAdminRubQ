import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletaEliminadaComponent } from './bicicleta-eliminada.component';

describe('BicicletaEliminadaComponent', () => {
  let component: BicicletaEliminadaComponent;
  let fixture: ComponentFixture<BicicletaEliminadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicicletaEliminadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletaEliminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
