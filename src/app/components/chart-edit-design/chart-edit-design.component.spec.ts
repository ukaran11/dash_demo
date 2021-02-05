import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEditDesignComponent } from './chart-edit-design.component';

describe('ChartEditDesignComponent', () => {
  let component: ChartEditDesignComponent;
  let fixture: ComponentFixture<ChartEditDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartEditDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEditDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
