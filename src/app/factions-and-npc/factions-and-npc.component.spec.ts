import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionsAndNpcComponent } from './factions-and-npc.component';

describe('FactionsAndNpcComponent', () => {
  let component: FactionsAndNpcComponent;
  let fixture: ComponentFixture<FactionsAndNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionsAndNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionsAndNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
