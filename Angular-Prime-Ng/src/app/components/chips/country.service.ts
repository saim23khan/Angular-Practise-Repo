import { Injectable } from '@angular/core';


export interface Country {
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries: Country[] = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    ];
  constructor() { }

  getCountries() {
    return new Promise<Country[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.countries);
      }, 1000);
    });
  }
}
