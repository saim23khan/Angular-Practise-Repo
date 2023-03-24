import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Prime-Ng';
  // values!: string[];

  formGroup = new FormGroup({
    values: new FormControl<string[] | null>(null)
  });

  submit() {
    console.log(this.formGroup.value);
  }
}
