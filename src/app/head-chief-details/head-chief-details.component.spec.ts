import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadChiefDetailsComponent } from './head-chief-details.component';

describe('HeadChiefDetailsComponent', () => {
  let component: HeadChiefDetailsComponent;
  let fixture: ComponentFixture<HeadChiefDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadChiefDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadChiefDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
