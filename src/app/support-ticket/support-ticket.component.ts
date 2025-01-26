import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-ticket.component.html',
  styleUrl: './support-ticket.component.css',
})
export class SupportTicketComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: (Math.random() * 100).toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status: 'closed' } : ticket
    );
  }
}
