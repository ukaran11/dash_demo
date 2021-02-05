import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Widget } from './../../store/models/widget.model'
import * as WidgetActions from './../../store/actions/widget.actions';

@Component({
  selector: 'app-chart-edit',
  templateUrl: './chart-edit.component.html',
  styleUrls: ['./chart-edit.component.css']
})
export class ChartEditComponent implements OnInit {
   initialState: Widget = {
    title:'',
    subtitle:'',
    legend:'',
    caption:'',
    thickness:'',
    position:''
};
  storeState: any;
  title: String;
  subtitle: String;
  flag2= true;
  isCaptionToggled: Boolean = false;
  caption: String;
  @Output() legendEditForMe: EventEmitter<any> = new EventEmitter();
  
  chartType;
  selectedChartType: any = '';
  selectChartType: any = [
    { displayName: 'Line Chart', value: 'line' },
    { displayName: 'Pie Chart', value: 'pie' },
    { displayName: 'Bar Chart', value: 'bar' },
    { displayName: 'Doughnut Chart', value: 'doughnut' },
    { displayName: 'Radar Chart', value: 'radar' }
  ];
  widget: Widget;
  
  constructor(private store: Store<{widget:{widget: Widget}}>) { }

  ngOnInit(): void {
    
  }

  addTitle(title: String){
    this.store.dispatch(new WidgetActions.AddTitle({title:title}));
  }

  addSubtitle(subtitle:String){
    this.store.dispatch(new WidgetActions.AddSubtitle({subtitle:subtitle}));
  }
  
  // TitleChange(title){
  //   this.addTitle(title);
  // }

  legendEdit(){
    this.store.select('widget').subscribe((data)=>{
      this.widget = data.widget;
      console.log(data);
    })
    console.log(this.widget);
    this.addTitle(this.title);
    this.addSubtitle(this.subtitle);
    this.legendEditForMe.emit({
      title:this.title,
      subtitle: this.subtitle,
      caption:this.caption,
      
    })
    // console.log(this.flag2);
  }

  captionToggle(){
    this.isCaptionToggled = !this.isCaptionToggled;
  }
}
