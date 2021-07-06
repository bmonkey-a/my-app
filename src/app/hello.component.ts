import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `./hello.component.html`,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  count: number = 0;
  @Input() name: string = '';

  @Output() onChanged = new EventEmitter<number>();

  increase() {
    this.onChanged.emit(++this.count);
  }
}
