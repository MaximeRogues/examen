import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdiComponent } from './edit-ordi.component';

describe('EditOrdiComponent', () => {
  let component: EditOrdiComponent;
  let fixture: ComponentFixture<EditOrdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
