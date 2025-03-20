import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTypeComponent } from './kitchen-type.component';

describe('KitchenTypeComponent', () => {
  let component: KitchenTypeComponent;
  let fixture: ComponentFixture<KitchenTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
