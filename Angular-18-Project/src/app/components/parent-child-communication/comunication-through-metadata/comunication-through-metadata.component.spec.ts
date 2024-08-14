import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicationThroughMetadataComponent } from './comunication-through-metadata.component';

describe('ComunicationThroughMetadataComponent', () => {
  let component: ComunicationThroughMetadataComponent;
  let fixture: ComponentFixture<ComunicationThroughMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicationThroughMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicationThroughMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
