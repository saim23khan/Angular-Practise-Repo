import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-dynamic-kanban-column',
  templateUrl: './dynamic-kanban-column.component.html',
  styleUrls: ['./dynamic-kanban-column.component.scss']
})
export class DynamicKanbanColumnComponent {

  // mainList = [
  //   ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
  //   ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']
  // ];

  columns = ['To do', 'In progress', 'Review', 'Testing', 'Done'];

  columnData:any = {
    'To do': ['Task 1', 'Task 2', 'Task 3'],
    'In progress': ['Task 4', 'Task 5'],
    'Review': ['Task 6'],
    'Testing': [],
    'Done': ['Task 7']
  };

  // ...

  getColumnData(column: any) {
    return this.columnData[column];
  }

  getConnectedLists(obj: any, column: string) {
    const keys = Object.keys(obj);
    const index = keys.indexOf(column);
    return [
      index > 0 ? this.getColumnId(keys[index - 1]) : null,
      index < keys.length - 1 ? this.getColumnId(keys[index + 1]) : null
    ].filter(id => id != null);
  }

  getColumnId(column: string) {
    return column.replace(/\s/g, '').toLowerCase();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
