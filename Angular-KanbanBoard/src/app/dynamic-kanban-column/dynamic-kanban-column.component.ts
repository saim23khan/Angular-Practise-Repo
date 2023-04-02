import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dynamic-kanban-column',
  templateUrl: './dynamic-kanban-column.component.html',
  styleUrls: ['./dynamic-kanban-column.component.scss']
})
export class DynamicKanbanColumnComponent {

  columns = [
    {name: 'To do', items: ['Item 1', 'Item 2', 'Item 3']},
    {name: 'Done', items: ['Item 4', 'Item 5']},
    {name: 'Delay', items: ['Item 6']},
    {name: 'Testing', items: []},
    {name: 'Done To', items: ['Item 7', 'Item 8']}
  ];

  getConnectedLists(columnName: string): string[] {
    return this.columns
      .filter(column => column.name !== columnName)
      .map(column => column.name.toLowerCase() + 'List');
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("Pereivous Id : "+event.previousContainer.id+"\nPresent: "+event.container.id+"\nDrag Item: "+event.item.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("Pereivous Id : "+event.previousContainer.id+"\nPresent: "+event.container.id+"\nDrag Item: "+event.item.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
