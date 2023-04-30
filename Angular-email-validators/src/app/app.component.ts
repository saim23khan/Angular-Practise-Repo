import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-email-validators';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,this.passwordValidater ]]
    });
  }

  emailValidator(control: { value: string; }) {
    // email regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (control.value && !emailPattern.test(control.value)) {
      return { invalidEmail: true };
    }

    return null;
  }

  passwordValidater(control: { value: string; }) {
    // password regex pattern
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (control.value && !passwordPattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.myForm.get('email')?.valid);
    console.log(this.myForm.get('password')?.valid);
  }
}
