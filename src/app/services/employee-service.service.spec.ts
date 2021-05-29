import { TestBed } from '@angular/core/testing';

import { EmployeeServiceService } from './employee-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getEmployee function', () =>{
    service = TestBed.inject(EmployeeServiceService);
    expect(service.getEmployees).toBeTruthy();
  });
});
