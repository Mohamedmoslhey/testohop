import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingformComponent } from './shippingform.component';

describe('ShippingformComponent', () => {
  let component: ShippingformComponent;
  let fixture: ComponentFixture<ShippingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
