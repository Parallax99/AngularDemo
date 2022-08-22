import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firstName:string=""
  lastName:string=""
  email:string=""
  password:string=""
  toggle(){
    console.log(this.firstName)
  }
}
