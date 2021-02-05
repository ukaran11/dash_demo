import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart-edit-design',
  templateUrl: './chart-edit-design.component.html',
  styleUrls: ['./chart-edit-design.component.css']
})
export class ChartEditDesignComponent implements OnInit {
  isExportToggled: boolean= false;

  @Output() chartOptionsFlow: EventEmitter<any> = new EventEmitter();

  selectlegendPosition: any = [
    { displayName: 'Line Chart', value: 'line' },
    { displayName: 'Pie Chart', value: 'pie' },
    { displayName: 'Bar Chart', value: 'bar' },
    { displayName: 'Doughnut Chart', value: 'doughnut' },
    { displayName: 'Radar Chart', value: 'radar' },
    { displayName: 'Line Chart', value: 'line' },
    { displayName: 'Pie Chart', value: 'pie' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  exportToggle(){
    this.isExportToggled = !this.isExportToggled;
    this.EventEmit();
  }
  
  EventEmit(){
  this.chartOptionsFlow.emit({
    exportEnabled : this.isExportToggled
  })
  }
  

}
