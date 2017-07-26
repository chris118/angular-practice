import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <ul>
      <li *ngFor="let hero of heroes">
          {{ hero }}
      </li>
    </ul>
  `
})
export class AppComponent  {
  name = 'Angular';
  heroes = ['aa', 'bb', 'cc', 'dd'];
}
