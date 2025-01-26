import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SupportTicketComponent } from "./support-ticket/support-ticket.component";
import { TrafficStatusComponent } from "./traffic-status/traffic-status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, SupportTicketComponent, TrafficStatusComponent, TrafficComponent, DashboardItemComponent],
})
export class AppComponent {

}
