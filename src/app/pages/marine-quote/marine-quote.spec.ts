import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineQuote } from './marine-quote';

describe('MarineQuote', () => {
  let component: MarineQuote;
  let fixture: ComponentFixture<MarineQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineQuote],
    }).compileComponents();

    fixture = TestBed.createComponent(MarineQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
