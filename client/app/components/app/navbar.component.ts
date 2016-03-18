import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {MDL} from './../mdl/MaterialDesignLite';

@Component({
    selector: 'navbar',
    template: `
    <div mdl class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout__title">Fixed drawer layout demo</span>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout__title">Lift Traker</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" [routerLink]="['/Login']">Login</a>
          <a class="mdl-navigation__link" [routerLink]="['/Lift']">Lifts</a>
          <a class="mdl-navigation__link" [routerLink]="['/LiftType']">Lift Types</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
      <div class="page-content">
        <ng-content></ng-content>
      </div>
      </main>
  </div>
        `,
    directives: [MDL, ROUTER_DIRECTIVES]
})
export class NavbarComponent {


}