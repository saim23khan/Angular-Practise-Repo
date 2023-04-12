import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruitCtrl = new FormControl('');

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  fruitCtrl = this.formGroup.get(this.controlName) as FormControl;
  constructor() {
    this.filteredFruits =this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Check if value is in autocomplete list
    if (this.allFruits.includes(value)) {
      // Add the fruit to the chips list
      if (value && !this.fruits.includes(value)) {
        this.fruits.push(value);
      }

      // Remove the fruit from the autocomplete list
      this.allFruits = this.allFruits.filter(fruit => fruit !== value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;

    // Add the fruit to the chips list
    if (value && !this.fruits.includes(value)) {
      this.fruits.push(value);
    }

    // Remove the fruit from the autocomplete list
    this.allFruits = this.allFruits.filter(fruit => fruit !== value);

    // Clear the input value
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
