import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ChartsModule } from 'ng2-charts';

import { ChartAreaComponent } from './components/chart-area/chart-area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartEditComponent } from './components/chart-edit/chart-edit.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './components/charts/bubble-chart/bubble-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/widget.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import 'hammerjs';
import 'chartjs-plugin-zoom';
import 'chartjs-plugin-streaming';
import { ChartEditDesignComponent } from './components/chart-edit-design/chart-edit-design.component';
import { CreateWidgetComponent } from './store/create-widget/create-widget.component';
import { ReadWidgetComponent } from './store/read-widget/read-widget.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChartAreaComponent,
    ChartEditComponent,
    PieChartComponent,
    LineChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    BubbleChartComponent,
    BarChartComponent,
    ChartEditDesignComponent,
    CreateWidgetComponent,
    ReadWidgetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HighchartsChartModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    ChartsModule,
    StoreModule.forRoot({
      widget: reducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
