import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirpiezaComponent } from './subirpieza.component';

describe('SubirpiezaComponent', () => {
  let component: SubirpiezaComponent;
  let fixture: ComponentFixture<SubirpiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirpiezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirpiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
