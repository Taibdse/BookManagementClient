import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../../services/validation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private validationService: ValidationService, 
    private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(){ 
    return this.loginForm.controls;
  }

  login($event){
    $event.preventDefault();
    this.submitted = true;
    if(this.loginForm.invalid){
      console.log('error');
    }
    console.log(this.loginForm.value);
  }

}
