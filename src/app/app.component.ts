import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <ul class="nav nav-pills">
      <li>
        <a class="nav-link" routerLink="/home"> Home</a>
      </li>
      <li>
        <a class="nav-link" routerLink="/products">Products</a>
      </li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent {
  title: string = 'first-steps';
}
