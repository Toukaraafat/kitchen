import { TestBed } from '@angular/core/testing';

import { IngredientsWayStepsService } from './ingredients-way-steps.service';

describe('IngredientsWayStepsService', () => {
  let service: IngredientsWayStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsWayStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
