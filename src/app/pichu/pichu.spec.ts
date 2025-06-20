import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pichu } from './pichu';

describe('Pichu', () => {
  let component: Pichu;
  let fixture: ComponentFixture<Pichu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pichu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pichu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
