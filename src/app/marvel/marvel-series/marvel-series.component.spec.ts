import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSeriesComponent } from './marvel-series.component';

describe('MarvelSeriesComponent', () => {
  let component: MarvelSeriesComponent;
  let fixture: ComponentFixture<MarvelSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
