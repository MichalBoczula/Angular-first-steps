import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <pm-product-list></pm-product-list>
  </div>`
})

export class AppComponent {
  title: string = 'first-steps';
}
