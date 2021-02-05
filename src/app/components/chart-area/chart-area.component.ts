import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.css']
})
export class ChartAreaComponent implements OnInit {
  
  @Input() title;
  @Input() subtitle;
  @Input() caption;

  
  flag = true;
  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      
      title: {
          text: this.title
      },
      
      subtitle: {
          text: this.subtitle
      },
      caption:{
        text:this.caption
      },
     
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits:{
        enabled: false
      },
      exporting:{
        enabled: true
      },
      series: [{
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

  legendEditor(event){
    // this.flag = !this.flag;
    // console.log(this.flag);
    console.log(this.title);
  }

  
}
