import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostlistnerComponent } from './components/hostlistner/hostlistner.component';
import { ParentComponent } from './components/encapsulation/parent/parent.component';
import { ComunicationThroughMetadataComponent } from './components/parent-child-communication/comunication-through-metadata/comunication-through-metadata.component';
import { IfElseElseifComponent } from './components/directives/if-else-elseif/if-else-elseif.component';
import { SwitchComponent } from './components/directives/switch/switch.component';
import { ForComponent } from './components/directives/for/for.component';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';
import { NgClassComponent } from './components/directives/ng-class/ng-class.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HostlistnerComponent,
    ParentComponent,
    ComunicationThroughMetadataComponent,
    IfElseElseifComponent,
    SwitchComponent,
    ForComponent,
    NgStyleComponent,
    NgClassComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-18-Project';
}
