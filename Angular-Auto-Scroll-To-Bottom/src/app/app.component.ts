import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrolDirective } from './scrol.directive';
import { ITodo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ScrolDirective)
  title = 'Angular-Auto-Scroll-To-Bottom';
  scroll!: ScrolDirective;

  todos!: ITodo[];

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodos()
      .then((tds) => this.todos = tds);
  }
}
