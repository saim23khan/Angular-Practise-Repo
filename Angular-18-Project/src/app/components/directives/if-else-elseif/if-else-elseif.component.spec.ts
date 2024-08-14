import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseElseifComponent } from './if-else-elseif.component';

describe('IfElseElseifComponent', () => {
  let component: IfElseElseifComponent;
  let fixture: ComponentFixture<IfElseElseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseElseifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseElseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
