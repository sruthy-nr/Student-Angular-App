import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  adm=""
  
  del=()=>{
    let data:any={
      "adm":this.adm }
    console.log(data)
  }
}
