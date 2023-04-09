import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
empForm:FormGroup;


constructor(private _fb: FormBuilder,private _empService: EmployeeService,
  private _dialogRef: MatDialogRef<EmpAddEditComponent>,

  
  ){
  this.empForm=this._fb.group({
    ProductId:'',
    ProductName:'',
    CategoryName:'',
    CategoryId:'',

  })}

  onFromSubmit(){
    if(this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert('Product added successfully')
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err);
          
        },
      })
      
    }
  }
}

