import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcdetailComponent } from './npcdetail.component';

describe('NpcdetailComponent', () => {
  let component: NpcdetailComponent;
  let fixture: ComponentFixture<NpcdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
