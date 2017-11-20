import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVeterinaryComponent } from './list-veterinary.component';

describe('ListVeterinaryComponent', () => {
  let component: ListVeterinaryComponent;
  let fixture: ComponentFixture<ListVeterinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVeterinaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
