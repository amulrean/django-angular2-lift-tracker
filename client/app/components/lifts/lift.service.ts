import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {ExRequestOptions} from '../../bootstrap'
import {Lift}           from './lift.model';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LiftService {
    constructor(private http:Http) {
    }

    private _liftsUrl = 'api/v1/lifts/';

    getLifts() {
        return this.http.get(this._liftsUrl)
            .map(res => <Lift[]> res.json().results)
            .catch(this.handleError);
    }

    addLift(lift:Lift):Observable<Lift> {

        let body = JSON.stringify(lift);

        return this.http.post(this._liftsUrl, body)
            .map(res => <Lift> res.json())
            .catch(this.handleError)
    }

    updateLift(lift:Lift):Observable<Lift> {

        let body = JSON.stringify(lift);

        return this.http.put(this._liftsUrl + lift.id + '/', body)
            .map(res => <Lift> res.json())
            .catch(this.handleError)
    }

    getLift(lift:Lift):Observable<Lift> {
        return this.http.get(this._liftsUrl + lift.id + '/')
            .map(res => <Lift> res.json())
            .catch(this.handleError)
    }

    deleteLift(lift:Lift):Observable<Response> {
        return this.http.delete(this._liftsUrl + lift.id + '/')
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