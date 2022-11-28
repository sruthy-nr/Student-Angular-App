import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  adm=""
  roll=""
  mob=""
  clg=""
  pname=""
  pphn=""
  uname=""
  pwd=""
  add=()=>{
    let data:any={
      "name":this.name,"adm":this.adm,"roll":this.roll,"mob":this.mob,"clg":this.clg,"pname":this.pname,"pphn":this.pphn,"uname":this.uname,"pwd":this.pwd
    }
    console.log(data)
  }
}
