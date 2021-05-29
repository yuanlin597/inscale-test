import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';


@Component({
  selector: 'app-app-employees',
  templateUrl: './app-employees.component.html',
  styleUrls: ['./app-employees.component.scss']
})
export class AppEmployeesComponent implements OnInit {

  totalEmployee: number = 0;
  highestEarningEmployee: string = '';
  recentJoinEmployee: string = '';

  jsonData: EmployeeModel[] = [];
  displayData: EmployeeModel[] = [];

  nameOrder: any = null;
  dateOrder: any = null;
  salaryOrder: any = null;

  constructor(private employeeService: EmployeeServiceService) {

  }

  ngOnInit(): void {

  this.employeeService.getEmployees().toPromise().then( (data:EmployeeModel[]) => {
      console.log(data);
      this.jsonData = data;
      this.totalEmployee = data.length;
      this.highestEarningEmployee = this.getHighestEarningEmployee(this.jsonData);
      this.recentJoinEmployee = this.getMostRecentJoinedEmployee(this.jsonData);
      this.sortDateJoin(this.jsonData, false);
    });
  }

  getHighestEarningEmployee(employeeList: EmployeeModel[]){
    let filteredEmployeeList: EmployeeModel[] = Object.assign([],employeeList);
    filteredEmployeeList.sort((a,b)=>(a.salary > b.salary)? -1: 1);
    console.log('filteredEmployeeList', filteredEmployeeList);
    return filteredEmployeeList[0].firstname + ' ' + filteredEmployeeList[0].lastname;
  }

  getMostRecentJoinedEmployee(employeeList: EmployeeModel[]){
    let filteredEmployeeList: EmployeeModel[] = Object.assign([],employeeList);
    filteredEmployeeList.sort(function(a,b){
      let date1 = new Date(a.dateJoined);
      let date2 = new Date(b.dateJoined);

      if(date1 < date2){
        return 1;
      }else{
        return -1;
      }
    });
    console.log('filteredEmployeeList date',filteredEmployeeList);
    return filteredEmployeeList[0].firstname + ' ' + filteredEmployeeList[0].lastname;
  }

  onSort(type:string, asc: boolean){
  if(asc == null){
    asc = true;
  }
    if('fullname' === type){
      console.log(type);
      this.sortFullname(this.displayData, asc);
      this.nameOrder = this.onToggle(asc);
      this.dateOrder = null;
      this.salaryOrder = null;
    }else if('dateJoin' === type){
      console.log(type);
      this.sortDateJoin(this.displayData, asc);
      this.dateOrder = this.onToggle(asc);
      this.nameOrder = null;
      this.salaryOrder = null;
    }else if('salary' === type){
      console.log(type);
      this.sortSalary(this.displayData, asc);
      this.salaryOrder = this.onToggle(asc);
      this.nameOrder = null;
      this.dateOrder = null;
    }
  }

  onToggle(order: boolean){
    if(order){
      return false;
    }else{
      return true;
    }
  }

  sortSalary(employeeList: EmployeeModel[], asc: boolean){
    let filteredEmployeeList: EmployeeModel[] = Object.assign([], employeeList);
    filteredEmployeeList.sort(function(a,b){
      let salary1 = a.salary;
      let salary2 = b.salary;

      if(asc){
        if(salary1 > salary2){
          return 1;
        }else{
          return -1;
        }
      }else{
      if(salary1 < salary2){
          return 1;
        }else{
          return -1;
        }
      }
    });
    this.displayData = filteredEmployeeList;
  }

  sortFullname(employeeList: EmployeeModel[], asc: boolean){
    let filteredEmployeeList: EmployeeModel[] = Object.assign([], employeeList);
    filteredEmployeeList.sort(function(a,b){
      let fullname1 = a.firstname + ' ' + a.lastname;
      let fullname2 = b.firstname + ' ' + b.lastname;

      if(asc){
        if(fullname1 > fullname2){
          return 1;
        }else{
          return -1;
        }
      }else{
      if(fullname1 < fullname2){
          return 1;
        }else{
          return -1;
        }
      }
    });
    this.displayData = filteredEmployeeList;
  }

  sortDateJoin(employeeList: EmployeeModel[], asc: boolean){
    let filteredEmployeeList: EmployeeModel[] = Object.assign([], employeeList);
    filteredEmployeeList.sort(function(a,b){
      let date1 = new Date(a.dateJoined);
      let date2 = new Date(b.dateJoined);

      if(asc){
        if(date1 > date2){
          return 1;
        }else{
          return -1;
        }
      }else{
        if(date1 < date2){
          return 1;
        }else{
          return -1;
        }
      }
    });
    this.displayData = filteredEmployeeList;
  }
}
