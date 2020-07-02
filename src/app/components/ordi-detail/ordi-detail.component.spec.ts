import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiDetailComponent } from './ordi-detail.component';

describe('OrdiDetailComponent', () => {
  let component: OrdiDetailComponent;
  let fixture: ComponentFixture<OrdiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
