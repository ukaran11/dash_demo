import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './components/charts/radar-chart/radar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { BubbleChartComponent } from './components/charts/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'doughnut-chart', component: DoughnutChartComponent},
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
  {path: 'bubble-chart', component: BubbleChartComponent},
  {path: 'dashboard', component: SidebarComponent },
  {path: 'line-chart', component: LineChartComponent },
  {path: '**', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
