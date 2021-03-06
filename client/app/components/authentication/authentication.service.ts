import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

import {User} from './user.model';

@Injectable()
export class AuthenticationService {
    constructor(private http:Http) {
    }

    private _authenticationUrl = 'rest-auth/';

    login(loginUser:User):Observable<Object> {

        let body = JSON.stringify(loginUser);

        return this.http.post(this._authenticationUrl + "login/", body)
            .map(res => <Object> res.json())
            .catch(this.handleError)
    }

    logout():Observable<void> {
        return this.http.post(this._authenticationUrl + "logout/", "")
            .map(res => res)
            .catch(this.handleError)
    }


    private handleError(error:Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}