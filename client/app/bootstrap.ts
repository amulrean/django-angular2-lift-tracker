import {bootstrap}    from 'angular2/platform/browser'
import {Injectable, provide}    from 'angular2/core'
import {HTTP_PROVIDERS, Headers, BaseRequestOptions, RequestOptions}    from 'angular2/http';
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'
import 'rxjs/Rx';
import {MATERIAL_PROVIDERS} from 'ng2-material/all'
 
import {AppComponent} from './components/app/AppComponent'


// For DJANGO CSRF Checking
// http://stackoverflow.com/questions/34494876/what-is-the-right-way-to-use-angular2-http-requests-with-django-csrf-protection
@Injectable()
export class ExRequestOptions extends RequestOptions  {
  constructor() {
    let headers = new Headers({'Content-Type': 'application/json'});
    super({headers: headers});
    this.headers.append('X-CSRFToken', this.getCookie('csrftoken'));
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    MATERIAL_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    HTTP_PROVIDERS,
    provide(RequestOptions, {useClass: ExRequestOptions})
]);