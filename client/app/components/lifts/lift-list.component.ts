import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {EditItem} from '../app/edit-item.model';
import {Lift}              from './lift.model';
import {LiftService}       from './lift.service';
import {LiftCardComponent} from './lift-card.component';

@Component({
    selector: 'lift-list',
    template: `
    <md-content class="md-padding" layout="row" layout-wrap layout-align="center start">
        <div flex="80" layout="column" layout-padding flex-xs="100">
            <lift-card *ngFor="#lift of lifts | async" [lift]="lift">
            </lift-card>
        </div>
    </md-content>
  `,
    styles: ['.error {color:red;}'],
    directives: [ LiftCardComponent]
})

export class LiftListComponent implements OnInit {
    constructor(private _liftService: LiftService) {
    }

    errorMessage: string;
    lifts: Observable<Array<Lift>>;
    newLift: Lift;

    ngOnInit() {
        this.lifts = this._liftService.getLifts();
        this.newLift = new Lift();
    }

    addLift() {
        if (!this.newLift) {
            return;
        }
        this._liftService.addLift(this.newLift)
            .subscribe(
            lift => this.addLiftSuccess(lift),
            error => this.errorMessage = <any>error);
    }

    addLiftSuccess(lift) {
        this.newLift = new Lift();
    }


}