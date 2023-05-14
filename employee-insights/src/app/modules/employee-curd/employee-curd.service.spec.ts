import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EmployeeCurdService } from './employee-curd.service';
import { of } from 'rxjs';

describe('EmployeeCurdService', () => {
  let service: EmployeeCurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeeCurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all employee details', () => {
    //spyOn(service, 'getAllEmployee').and.returnValue(of({}));

  });
});
