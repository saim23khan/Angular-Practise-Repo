import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../_module/Material.Module';

@Component({
  selector: 'app-menuheader',
  standalone: true,
  imports: [RouterModule,MaterialModule],
  templateUrl: './menuheader.component.html',
  styleUrl: './menuheader.component.css'
})
export class MenuheaderComponent {

}
