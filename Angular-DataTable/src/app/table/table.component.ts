import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {DataTableDirective} from "angular-datatables";

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit{
  // @ViewChild(DataTableDirective, { static: false })
  // dataTable!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtOptions2: DataTables.Settings = {};

  users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-555-5555' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '555-555-5555' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', phone: '555-555-5555' },
    { id: 4, name: 'Alice Smith', email: 'alice.smith@example.com', phone: '555-555-5555' },
    { id: 5, name: 'John Doe', email: 'asd@asdasd.com', phone: '555-555-5555' },
    { id: 6, name: 'Jane Doe', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 7, name: 'Bob Smith', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 8, name: 'Alice Smith', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 9, name: 'John Doe', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 10, name: 'Jane Doe', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 11, name: 'Bob Smith', email: 'sfds@asd.com', phone: '555-555-5555' },
    { id: 12, name: 'Alice Smith', email: 'sfds@asd.com', phone: '555-555-5555' },
  ];

  constructor(private router: Router) {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   columns: [
    //     { title: 'ID', data: 'id' },
    //     { title: 'Name', data: 'name' },
    //     { title: 'Email', data: 'email' },
    //     { title: 'Phone', data: 'phone' },
    //     { title: 'Action',
    //       render: function (data: any, type: any, full: any) {
    //       return 'View';
    //     }
    //     }
    //   ]
    // };
  }

  navigateToDetail(user: any): void {
    console.log(user);
    this.router.navigate(['/tableDetails', user.id]);
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'Name', data: 'name' },
        { title: 'Email', data: 'email' },
        { title: 'Phone', data: 'phone' },
        { title: 'Action' }
      ]
    };

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'Name', data: 'name' },
        { title: 'Email', data: 'email' },
        { title: 'Phone', data: 'phone' },
        { title: 'Action' }
      ]
    };
  }
  // dtOptions: DataTables.Settings = {};
  //
  // constructor(private renderer: Renderer2, private router: Router) { }
  //
  // ngOnInit(): void {
  //   this.dtOptions = {
  //     ajax: 'data/data.json',
  //     columns: [{
  //       title: 'ID',
  //       data: 'id'
  //     }, {
  //       title: 'First name',
  //       data: 'firstName'
  //     }, {
  //       title: 'Last name',
  //       data: 'lastName'
  //     }, {
  //       title: 'Action',
  //       render: function (data: any, type: any, full: any) {
  //         return 'View';
  //       }
  //     }]
  //   };
  // }
  //
  // ngAfterViewInit(): void {
  //   this.renderer.listen('document', 'click', (event) => {
  //     if (event.target.hasAttribute("view-person-id")) {
  //       this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
  //     }
  //   });
  // }
  //
  // users = [
  //   {
  //     id: 1,
  //     name: 'Leanne Graham',
  //   },
  //   {
  //     id: 2,
  //     name: 'Ervin Howell',
  //   }
  // ];


}
