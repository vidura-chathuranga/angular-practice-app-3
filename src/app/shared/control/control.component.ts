import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement> // as viewChild annotation this is use to select ng-content projected
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control);
  }
}
