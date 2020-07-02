import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdiComponent } from './add-ordi.component';

describe('AddOrdiComponent', () => {
  let component: AddOrdiComponent;
  let fixture: ComponentFixture<AddOrdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
