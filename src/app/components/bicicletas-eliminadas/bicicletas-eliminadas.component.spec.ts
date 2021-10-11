import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicicletasEliminadasComponent } from './bicicletas-eliminadas.component';

describe('BicicletasEliminadasComponent', () => {
  let component: BicicletasEliminadasComponent;
  let fixture: ComponentFixture<BicicletasEliminadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BicicletasEliminadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BicicletasEliminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
