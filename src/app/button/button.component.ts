import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * This is the button component. It can be used to build clicky things!
 *
 * See [Figma reference](https://www.figma.com/file/X1JRLUCEp6JnoeKAxRPNeF/Angular-Architects-Design-Systems?node-id=1%3A3) for specifications.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Set the text to be displayed on the button
   */
  @Input() label?: string;
  /**
   * Set the default counter value
   */
  @Input() counter: number = 0;
  /**
   * Triggered when the counter is incremented after button click
   */
  @Output() onIncrement: EventEmitter<number> = new EventEmitter();

  increment() {
    this.counter++;
    this.onIncrement.emit(this.counter);
  }
}
