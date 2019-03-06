import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcItemComponent } from './npc-item.component';

describe('NpcItemComponent', () => {
  let component: NpcItemComponent;
  let fixture: ComponentFixture<NpcItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
