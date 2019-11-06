import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditqComponent } from './editq.component';

describe('EditqComponent', () => {
  let component: EditqComponent;
  let fixture: ComponentFixture<EditqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
