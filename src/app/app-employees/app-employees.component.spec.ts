import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeesComponent } from './app-employees.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppEmployeesComponent', () => {
  let component: AppEmployeesComponent;
  let fixture: ComponentFixture<AppEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
      declarations: [ AppEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
