import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionItemComponent } from './faction-item.component';

describe('FactionItemComponent', () => {
  let component: FactionItemComponent;
  let fixture: ComponentFixture<FactionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
