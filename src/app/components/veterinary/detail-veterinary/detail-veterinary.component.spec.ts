import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVeterinaryComponent } from './detail-veterinary.component';

describe('DetailVeterinaryComponent', () => {
  let component: DetailVeterinaryComponent;
  let fixture: ComponentFixture<DetailVeterinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVeterinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
