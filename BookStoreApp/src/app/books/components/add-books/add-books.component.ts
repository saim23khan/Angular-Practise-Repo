import { Component, OnInit } from '@angular/core';
import { NavigaterService } from 'src/app/shared/services/navigater.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {

  constructor(public _navigationService: NavigaterService) { }

  ngOnInit(): void {
  }

}
