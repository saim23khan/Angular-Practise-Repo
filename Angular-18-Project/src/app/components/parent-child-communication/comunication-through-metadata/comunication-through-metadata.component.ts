import { Component } from '@angular/core';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-comunication-through-metadata',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './comunication-through-metadata.component.html',
  styleUrl: './comunication-through-metadata.component.scss'
})
export class ComunicationThroughMetadataComponent {

}
