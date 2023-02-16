import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  flag: boolean = true;
  name: string = 'John';

  public onChangeFlag(): void {
    this.flag = !this.flag;
    this.name = 'Jane';
  }
  onUpdate(event: Event): void {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
