import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {MDL} from './../mdl/MaterialDesignLite';

import {HomeComponent} from '../home/HomeComponent'
import {LiftComponent} from '../lifts/lift.component'
import {LiftTypeComponent} from '../lift-types/lift-type.component'
import {AboutComponent} from '../about/AboutComponent'

@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/lift', component: LiftComponent, as: 'Lift'},
    {path: '/lift-type', component: LiftTypeComponent, as: 'LiftType'},
    {path: '/about', component: AboutComponent, as: 'About'},
])
@Component({
    selector: 'my-app',
    template: `
     <div mdl class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Title</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" [routerLink]="['/Lift']">Lifts</a>
            <a class="mdl-navigation__link" [routerLink]="['/LiftType']">Lift Types</a>
            <a class="mdl-navigation__link" href="">Link</a>
            <a class="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
      <main class="mdl-layout__content">
        <div class="page-content"><router-outlet></router-outlet></div>
      </main>
    </div>
        `,
    directives: [ROUTER_DIRECTIVES, MDL]
})
export class AppComponent {

    constructor() {
        console.log("We are up and running!");
    }

}