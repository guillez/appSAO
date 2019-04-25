import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneshistorialPage } from './planeshistorial.page';

describe('PlaneshistorialPage', () => {
  let component: PlaneshistorialPage;
  let fixture: ComponentFixture<PlaneshistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneshistorialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneshistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
