import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {ExRequestOptions} from '../../bootstrap'
import {LiftType}           from './lift-type.model';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LiftTypeService {
    constructor(private http:Http) {
    }

    private _liftTypesUrl = 'api/v1/lift-types/';

    getLiftTypes() {
        return this.http.get(this._liftTypesUrl)
            .map(res => <LiftType[]> res.json().results)
            .catch(this.handleError);
    }

    addLiftType(liftType:LiftType):Observable<LiftType> {

        let body = JSON.stringify(liftType);

        return this.http.post(this._liftTypesUrl, body)
            .map(res => <LiftType> res.json())
            .catch(this.handleError)
    }

    updateLiftType(liftType:LiftType):Observable<LiftType> {

        let body = JSON.stringify(liftType);

        return this.http.put(this._liftTypesUrl + liftType.id + '/', body)
            .map(res => <LiftType> res.json())
            .catch(this.handleError)
    }

    getLiftType(liftType:LiftType):Observable<LiftType> {
        return this.http.get(this._liftTypesUrl + liftType.id + '/')
            .map(res => <LiftType> res.json())
            .catch(this.handleError)
    }

    deleteLiftType(liftType:LiftType):Observable<Response> {
        return this.http.delete(this._liftTypesUrl + liftType.id + '/')
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