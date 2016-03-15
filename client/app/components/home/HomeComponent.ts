import {Component, OnInit} from 'angular2/core';

import {AuthenticationService} from './../authentication/authentication.service';
import {User} from './../authentication/user.model';

@Component({
    selector: 'home',
    template: `
        <h1>Home</h1>
        <form>
            Login:
            <input [(ngModel)]="loginUser.username" />
            <input [(ngModel)]="loginUser.password" />
            <button type="submit" (click)="login()">
                Login
            </button>
            <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
        </form>
    `,
    providers: [
        AuthenticationService,
    ]
})

export class HomeComponent implements OnInit {

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
                user => this.loginSuccess(user),
                error => this.errorMessage = <any>error);
    }
    
    loginSuccess(user) {
        console.log(user.username + " is logged in");
    }
}