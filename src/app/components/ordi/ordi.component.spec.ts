import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiComponent } from './ordi.component';

describe('OrdiComponent', () => {
  let component: OrdiComponent;
  let fixture: ComponentFixture<OrdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
