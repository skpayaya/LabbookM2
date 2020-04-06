import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab2';

  trueIfUpdating=false;

  id:number;
  name:string;
  salary:number;
  department:string;

  updateID:number;
  updateId:number;
  updateName:string;
  updateSalary:number;
  updateDepartment:string;

  employees:Employee[]=[{id:1001,name:"Rahul",salary:9000,department:"Java"},
  {id:1002,name:"sachin",salary:19000,department:"OraApps"},
  {id:1003,name:"Vikash",salary:29000,department:"BI"},
  {id:1004,name:'Sachin',salary:11500,department:'ORAAPS'},
  {id:1005,name:'Amol',salary:7000,department:'.NET'},
  {id:1006,name:'Vishal',salary:17000,department:'BI'},
  {id:1007,name:'Rajita',salary:21000,department:'BI'},
  {id:1008,name:'Neelima',salary:81000,department:'TESTING'},
  {id:1009,name:'Daya',salary:1000,department:'TESTING'} 
];

  addEmployee(event) {
    console.log(event);
    window.alert(this.id +" "+ this.name+" "+this.salary+" "+this.department);

    this.employees.push(new Employee(this.id,this.name,this.salary,this.department));
    

  }

 
  onClickDelete(id) {
    console.log(id);
    
    for(let i=0;i<this.employees.length;i++) {
      if(this.employees[i].id==id)
      {
        this.employees.splice(i,1);
      }
    }
  }
  onClickUpdate(id:number) {
    this.trueIfUpdating=true;

    for(let i=0;i<this.employees.length;i++) {
      let emp=this.employees[i];
      if(emp.id==id)
      {
        this.updateID=emp.id;
        this.updateId=emp.id;
        this.updateDepartment=emp.department;
        this.updateName=emp.name;
        this.updateSalary=emp.salary;
      }
    }
  }

  updateEmployee() {
    console.log("update employee");
    this.trueIfUpdating=false;

    for(let i=0;i<this.employees.length;i++) {
      if(this.employees[i].id==this.updateID)
      {
        this.employees[i].id=this.updateId;
        this.employees[i].name=this.updateName;
        this.employees[i].salary=this.updateSalary;
        this.employees[i].department=this.updateDepartment;
      }
    }


  }

}
