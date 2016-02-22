import {Component, OnInit} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Lift}              from './lift.model';
import {LiftService}       from './lift.service';
@Component({
    selector: 'lift-list',
    template: `
    <md-content class="md-padding" layout="row" layout-wrap layout-align="center start">
        <div flex="50" layout="column" flex-xs="100">
        <md-card *ngFor="#lift of lifts">
             <md-card-header>
                <md-card-avatar>
                    <i md-icon>menu</i>
                </md-card-avatar>
                <md-card-header-text>
                    <span class="md-title">{{ lift.lift_type.name }}</span>
                    <span class="md-subhead">{{ lift.date }}</span>
                </md-card-header-text>
             </md-card-header>
          <md-card-content>
            <p>Id: {{ lift.id }}</p>
            <p>Sets:</p>
                <p *ngFor="#lift_set of lift.lift_sets">
                - Reps: {{ lift_set.reps }} Weight {{ lift_set.weight }}
                </p>
          </md-card-content>
          <md-card-actions layout="row" layout-align="end center">
            <button md-button (click)="deleteLift(lift)">Delete</button>
          </md-card-actions>
        </md-card>
    </div>
    </md-content>
  `,
    styles: ['.error {color:red;}'],
    directives: [MATERIAL_DIRECTIVES]
})

export class LiftListComponent implements OnInit {
    constructor(private _liftService:LiftService) {
    }

    errorMessage:string;
    lifts:Lift[];
    newLift:Lift;

    ngOnInit() {
        this.getLifts();
        this.newLift = new Lift();
    }

    getLifts() {
        this._liftService.getLifts()
            .subscribe(
                lifts => this.lifts = lifts,
                error => this.errorMessage = <any>error);
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
        this.getLifts();
        this.newLift = new Lift();
    }

    deleteLift(lift:Lift) {

        this._liftService.deleteLift(lift)
            .subscribe(
                res => this.deleteLiftSuccess(lift),
                error => this.errorMessage = <any>error);
    }

    deleteLiftSuccess(lift) {
        this.getLifts();
    }


}