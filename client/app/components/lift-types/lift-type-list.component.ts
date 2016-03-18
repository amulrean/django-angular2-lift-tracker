import {Component, OnInit} from 'angular2/core';
import {LiftType}              from './lift-type.model';
import {LiftTypeService}       from './lift-type.service';
@Component({
    selector: 'lift-type-list',
    template: `
    <div layout="row">
    <div flex="80" flex-xs="100" layout="column">
        <form>
            New Lift Type:
            <input [(ngModel)]="newLiftType.name" />
            <button type="submit" (click)="addLiftType()">
                Add Lift Type
            </button>
            <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
        </form>
        <md-card *ngFor="#liftType of liftTypes">
          <md-card-title>
            <md-card-title-text>
              <span class="md-headline">{{ liftType.name }}</span>
              <span class="md-subhead">Id: {{ liftType.id }}</span>
            </md-card-title-text>
          </md-card-title>
          <md-card-actions layout="row" layout-align="end center">
            <button md-button (click)="deleteLiftType(liftType)">Delete</button>
          </md-card-actions>
        </md-card>
    </div>
    </div>
  `,
    styles: ['.error {color:red;}'],
    directives: []
})

export class LiftTypeListComponent implements OnInit {
    constructor(private _liftTypeService:LiftTypeService) {
    }

    errorMessage:string;
    liftTypes:LiftType[];
    newLiftType:LiftType;

    ngOnInit() {
        this.getLiftTypes();
        this.newLiftType = new LiftType();
    }

    getLiftTypes() {
        this._liftTypeService.getLiftTypes()
            .subscribe(
                liftTypes => this.liftTypes = liftTypes,
                error => this.errorMessage = <any>error);
    }

    addLiftType() {
        if (!this.newLiftType.name) {
            return;
        }
        this._liftTypeService.addLiftType(this.newLiftType)
            .subscribe(
                liftType => this.addLiftTypeSuccess(liftType),
                error => this.errorMessage = <any>error);
    }

    addLiftTypeSuccess(liftType) {
        this.getLiftTypes();
        this.newLiftType = new LiftType();
    }

    deleteLiftType(liftType:LiftType) {

        this._liftTypeService.deleteLiftType(liftType)
            .subscribe(
                res => this.deleteLiftTypeSuccess(liftType),
                error => this.errorMessage = <any>error);
    }

    deleteLiftTypeSuccess(liftType) {
        this.getLiftTypes();
    }


}