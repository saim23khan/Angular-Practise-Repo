import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-chipform',
  templateUrl: './chipform.component.html',
  styleUrls: ['./chipform.component.scss']
})
export class ChipformComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    'name': new FormControl('', Validators.required),
    'chips': new FormControl([]),
    'otherForm': new FormGroup({
      'email': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required)
    })
  });


  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our chip
    if ((value || '').trim()) {
      const chips = this.form.get('chips') as FormControl;
      chips.setValue([...chips.value, value.trim()]);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeChip(chip: string): void {
    const chips = this.form.get('chips') as FormControl;
    const index = chips.value.indexOf(chip);

    if (index >= 0) {
      chips.value.splice(index, 1);
      chips.setValue(chips.value);
    }
  }

  submit() {
    console.log(this.form.value);
  }
}
