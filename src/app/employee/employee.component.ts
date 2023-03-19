import { Component } from '@angular/core';
import { APIService, Employee, } from '../API.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private api: APIService) {
    this.api.ListEmployees()
      .then((data) => {
        this.employees = data.items as Employee[]
        console.log("The type of employee is:", typeof data.items)
        console.log(this.employees)
      })
      .catch((err) => {
        console.log("error Message:", err)
      })
  }

  employees: Employee[] = [];

  id: string | null = ""
  name: string = ""
  email: string = ""
  phoneNo: number = 0
  address: string = ''

  onSubmit() {
    this.api.CreateEmployee({ id: this.id, employeeName: this.name, employeeEmail: this.email, employeeAddress: this.address, employeePhoneNo: this.phoneNo })
      .then((employee) => {
        this.employees = [...this.employees, employee]
        console.log("item created Successfully")
      })
      .catch((err) => {
        console.log("error message:", err)
      })
  }

  Delete(id: string) {
    this.api.DeleteEmployee({ id: id })
      .then((deleted_data) => {
        this.employees = this.employees.filter((emp) => emp.id != deleted_data.id)
      })
  }

  updateid: string = ''
  set(id: string) {
    this.updateid = id
  }


  updatedid: string | null = ""
  updatedname: string = ""
  updatedemail: string = ""
  updatedphoneNo: number = 0
  updatedaddress: string = ''

  Update() {
    this.api.UpdateEmployee({ id: this.updateid, employeeName: this.updatedname, employeeEmail: this.updatedemail, employeeAddress: this.updatedaddress, employeePhoneNo: this.updatedphoneNo })
      .then((data) => {
        console.log("updated Successfull")
        console.log("updaed data:", data)
        this.employees = this.employees.map((emp) => emp.id != data.id ? emp : data)
      })
  }
}
