import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Country, CountryService} from "./country.service";
import {HttpClient} from "@angular/common/http";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit{

  formGroup = new FormGroup({
    values: new FormControl([]),
    selectedCountry: new FormControl([])
  });

  // countries!: any[];
  //
  //
  // filteredCountries!: any[];
  //
  // searchText: string = '';



  countries!: SelectItem[];
  filteredCountries!: SelectItem[];
  selectedCountries: SelectItem[] = [];
  constructor(private countryService: CountryService,public http:HttpClient) {}


  // filterCountry(event: { query: any; }) {
  //   let filtered: any[] = [];
  //   let query = event.query;
  //
  //   for (let i = 0; i < this.countries.length; i++) {
  //     let country = this.countries[i];
  //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(country);
  //     }
  //   }
  //
  //   this.filteredCountries = filtered;
  // }


  search(event: { query: any; }) {
    const query = event.query;
    this.countryService.getCountries().then((data: Country[]) => {
      this.filteredCountries = data.filter(country => {
        return country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }).map(country => {
        return { label: country.name, value: country };
      });
    });
  }


  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries.map(country => ({ label: country.name, value: country }));
    });
  }
  filterCountries(event: { query: string; }) {
    // @ts-ignore
    this.filteredCountries = this.countries.filter(country => country.label.toLowerCase().includes(event.query.toLowerCase()));
  }

  removeCountry(country: SelectItem) {
    this.selectedCountries = this.selectedCountries.filter(c => c !== country);
  }

  separatorExp: RegExp = /,| /;

  submit() {
    console.log(this.formGroup.value);
  }
}
