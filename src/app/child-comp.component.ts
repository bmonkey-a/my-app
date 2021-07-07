import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: `./child-comp.component.html`
})
export class ChildComponent {
  counter: number = 0;
  increment() {this.counter++}
  decrement() {this.counter--}

  @Input() userName: string = '';
  _userAge: number = 0;

  @Input()
  set userAge(age:number){
    if (age < 0)
      this._userAge = 0;
    else if (age>100)
      this._userAge = 100;
    else
      this._userAge = this.counter;
  }
  get userAge() {return this._userAge; }
}
