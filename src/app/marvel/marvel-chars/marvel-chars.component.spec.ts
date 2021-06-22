import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharsComponent } from './marvel-chars.component';

describe('MarvelCharsComponent', () => {
  let component: MarvelCharsComponent;
  let fixture: ComponentFixture<MarvelCharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
