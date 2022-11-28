import { Component } from '@angular/core';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  adm=""
  
  edit=()=>{
    let data:any={
      "adm":this.adm }
    console.log(data)
  }
}
