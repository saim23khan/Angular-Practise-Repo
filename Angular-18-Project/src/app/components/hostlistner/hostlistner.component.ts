import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistner',
  standalone: true,
  imports: [],
  templateUrl: './hostlistner.component.html',
  styleUrl: './hostlistner.component.scss',
  preserveWhitespaces: true
})
export class HostlistnerComponent {
  @HostListener('document:click', ['$event'])
  runAtHost(){
    alert("running")
  }
}
