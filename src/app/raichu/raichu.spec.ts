import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raichu } from './raichu';

describe('Raichu', () => {
  let component: Raichu;
  let fixture: ComponentFixture<Raichu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raichu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raichu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
