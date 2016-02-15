import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {HomeComponent} from '../home/HomeComponent'
import {AboutComponent} from '../about/AboutComponent'

@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/about', component: AboutComponent, as: 'About'},
])
@Component({
    selector: 'my-app',
    template: `
        <section class="material-app-content">
            <md-toolbar class="md-whiteframe-z1">
                <nav class="md-toolbar-tools">
                  <button md-button alt="Home" class="md-icon-button" [routerLink]="['/Home']"><i class="" md-icon>home</i></button>
                  <h1 flex>Lift Tracker</h1>
                  <button md-button [routerLink]="['/About']">About</button>
                </nav>
              </md-toolbar>
            <md-content layout-padding layout="column">
                <router-outlet></router-outlet>
            </md-content>
        </section>
        `,
    directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
export class AppComponent {

    constructor() {
        console.log("We are up and running!");
    }

}