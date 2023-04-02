import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicKanbanColumnComponent } from './dynamic-kanban-column.component';

describe('DynamicKanbanColumnComponent', () => {
  let component: DynamicKanbanColumnComponent;
  let fixture: ComponentFixture<DynamicKanbanColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicKanbanColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicKanbanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
