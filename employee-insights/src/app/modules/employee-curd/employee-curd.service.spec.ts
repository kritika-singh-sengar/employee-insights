import { TestBed } from '@angular/core/testing';

import { EmployeeCurdService } from './employee-curd.service';

describe('EmployeeCurdService', () => {
  let service: EmployeeCurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
