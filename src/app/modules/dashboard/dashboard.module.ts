import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [
    DashboardPageComponent
  ],
})
export class DashboardModule {}
