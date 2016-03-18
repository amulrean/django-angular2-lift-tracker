import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {MDL} from './../mdl/MaterialDesignLite';

import {NavbarComponent} from './navbar.component'

import {LoginComponent} from '../authentication/login.component'
import {LiftComponent} from '../lifts/lift.component'
import {LiftTypeComponent} from '../lift-types/lift-type.component'
import {AboutComponent} from '../about/AboutComponent'


@RouteConfig([
    {path: '/', component: LoginComponent, as: 'Login'},
    {path: '/lift', component: LiftComponent, as: 'Lift'},
    {path: '/lift-type', component: LiftTypeComponent, as: 'LiftType'},
    {path: '/about', component: AboutComponent, as: 'About'},
])
@Component({
    selector: 'my-app',
    template: `
     <navbar>
        <router-outlet></router-outlet>
     </navbar>
        `,
    directives: [ROUTER_DIRECTIVES, MDL, NavbarComponent]
})
export class AppComponent {

    constructor() {
        console.log("We are up and running!");
    }

}