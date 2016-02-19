import {Component, OnInit} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {LiftType}              from './lift-type.model';
import {LiftTypeService}       from './lift-type.service';
@Component({
    selector: 'lift-type-list',
    template: `
    <div layout="row">
    <div flex="50" flex-xs="100" layout="column">
        <md-card *ngFor="#liftType of liftTypes">
          <md-card-title>
            <md-card-title-text>
              <span class="md-headline">{{ liftType.name }}</span>
              <span class="md-subhead">Id: {{ liftType.id }}</span>
            </md-card-title-text>
          </md-card-title>
          <md-card-actions layout="row" layout-align="end center">
            <button md-button (click)="editLiftType(liftType)">Edit</button>
            <button md-button (click)="deleteLiftType(liftType)">Delete</button>
          </md-card-actions>
        </md-card>
    </div>
    <div flex="50" flex-xs="100" layout="column">
      New Lift Type:
      <input [(ngModel)]="newLiftType.name" />
      <button (click)="addLiftType()">
        Add Lift Type
      </button>
      <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    </div>
    </div>
  `,
    styles: ['.error {color:red;}'],
    directives: [MATERIAL_DIRECTIVES]
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