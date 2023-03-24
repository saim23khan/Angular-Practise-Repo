import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentsComponent } from './header-contents.component';

describe('HeaderContentsComponent', () => {
  let component: HeaderContentsComponent;
  let fixture: ComponentFixture<HeaderContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
