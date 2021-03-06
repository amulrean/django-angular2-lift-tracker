import {Component, OnInit} from 'angular2/core';

import {AuthenticationService} from './authentication.service';
import {User} from './user.model';

import {MDL} from './../mdl/MaterialDesignLite';

@Component({
    selector: 'login',
    template: `
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
            <h1>Login</h1>
            <form mdl>
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="usernameInput" [(ngModel)]="loginUser.username" >
                    <label class="mdl-textfield__label" for="usernameInput">Username</label>
                  </div>
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="passwordInput" [(ngModel)]="loginUser.password" >
                    <label class="mdl-textfield__label" for="passwordInput">Password</label>
                  </div>
                <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="login()">
                    Login
                </button>
                <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
            </form>
            <button  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="logout()">
                    Logout
                </button>
        </div>
    </div>
    `,
    directives: [MDL],
    providers: [
        AuthenticationService,
    ]
})

export class LoginComponent implements OnInit {

    constructor(private _authenticationService:AuthenticationService) { }
    
    errorMessage:string;
    loginUser:User;

    ngOnInit() { 
        this.loginUser = new User();
    }
    
    login() {
        if (!this.loginUser.username || !this.loginUser.password ) {
            this.errorMessage = "Can't login";
            return;
        }
        this._authenticationService.login(this.loginUser)
            .subscribe(
                resp => this.loginSuccess(resp),
                error => this.errorMessage = <any>error);
    }
    
    loginSuccess(resp) {
        console.log(resp + " is logged in");
        this.loginUser.key = resp.key;
    }

    logout() {
        if (!this.loginUser.key ) {
            this.errorMessage = "Can't logout";
            return;
        }
        this._authenticationService.logout()
            .subscribe(
                resp => console.log(resp + " is logged out"),
                error => this.errorMessage = <any>error);
    }
}