import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // access template variable using signal viewChild();
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  enteredTitle = '';
  enteredRequest = '';

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredRequest });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredRequest = '';
    // this.form().nativeElement.reset(); // access form element with signal using viewChild function
  }
}
