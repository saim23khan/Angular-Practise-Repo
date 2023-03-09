import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net-bs4';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
}
