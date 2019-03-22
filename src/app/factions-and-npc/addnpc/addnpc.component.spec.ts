import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnpcComponent } from './addnpc.component';

describe('AddnpcComponent', () => {
  let component: AddnpcComponent;
  let fixture: ComponentFixture<AddnpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
