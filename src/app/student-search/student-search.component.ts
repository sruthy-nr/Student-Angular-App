import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  adm=""
  
  search=()=>{
    let data:any={
      "adm":this.adm }
    console.log(data)
  }
}
