import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Widget } from './../../store/models/widget.model'
import * as WidgetActions from './../../store/actions/widget.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  flag: Boolean = false;
  title: String;
  subtitle: String;
  caption: String;

  constructor(private store: Store<{AppState}>) { }
  
  

  
  // title: string;
  //   subtitle: string;
  //   legend: string;
  //   caption: string;
  //   thickness: string;
  //   position: string;

  legendEditor(event){
    this.flag = !this.flag;
    this.title=event.title;
    this.subtitle = event.subtitle;
    this.caption = event.caption;
    console.log(event);
  }
  


  ngOnInit(): void {
  }

}
