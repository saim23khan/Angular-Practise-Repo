import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-header-contents',
  templateUrl: './header-contents.component.html',
  styleUrls: ['./header-contents.component.scss']
})
export class HeaderContentsComponent {
  // constructor(@Inject(LIST) private ListInjectted:string[]){}
  @Input() list!: string[];
}
