import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigaterService } from '../../services/navigater.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router:Router,public _navigationService: NavigaterService) { }

  ngOnInit(): void {
  }
}
