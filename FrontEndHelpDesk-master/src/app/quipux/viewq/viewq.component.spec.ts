import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqComponent } from './viewq.component';

describe('ViewqComponent', () => {
  let component: ViewqComponent;
  let fixture: ComponentFixture<ViewqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
