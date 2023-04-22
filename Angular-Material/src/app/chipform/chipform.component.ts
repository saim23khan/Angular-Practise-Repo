import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-chipform',
  templateUrl: './chipform.component.html',
  styleUrls: ['./chipform.component.scss']
})
export class ChipformComponent implements OnInit {

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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  // addChip(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //
  //   // Add our chip
  //   if ((value || '').trim()) {
  //     const chips = this.form.get('chips') as FormControl;
  //     chips.setValue([...chips.value, value.trim()]);
  //   }
  //
  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  //
  // removeChip(chip: string): void {
  //   const chips = this.form.get('chips') as FormControl;
  //   const index = chips.value.indexOf(chip);
  //
  //   if (index >= 0) {
  //     chips.value.splice(index, 1);
  //     chips.setValue(chips.value);
  //   }
  // }

  submit() {
    console.log(this.form.value);
  }
}
