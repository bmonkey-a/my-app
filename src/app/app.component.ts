import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  className = 'black-block';
  rainbow: any = [
    'red-block',
    'orange-block',
    'yellow-block',
    'green-block',
    'blue-block',
    'indigo-block',
    'violet-block'
  ];
  countFromChild: number = 0;
  nameFromAppComponent: string = 'Anna';

  onChangeChild($event: any) {
    console.log($event);
    this.countFromChild = $event;
    this.className = this.rainbow[Math.floor(Math.random() * 7)];
  }
}
