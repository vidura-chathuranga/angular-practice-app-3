import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) ticketInfo!: Ticket;
  detailsVisible = false;
  @Output() close = new EventEmitter<string>();

  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
