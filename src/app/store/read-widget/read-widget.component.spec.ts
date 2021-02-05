import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWidgetComponent } from './read-widget.component';

describe('ReadWidgetComponent', () => {
  let component: ReadWidgetComponent;
  let fixture: ComponentFixture<ReadWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
