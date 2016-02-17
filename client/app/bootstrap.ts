import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'
import 'rxjs/Rx';
import {MATERIAL_PROVIDERS} from 'ng2-material/all'
 
import {AppComponent} from './components/app/AppComponent'
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    MATERIAL_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);