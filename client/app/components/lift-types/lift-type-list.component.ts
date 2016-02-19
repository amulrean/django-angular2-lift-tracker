import {Component, OnInit} from 'angular2/core';
import {LiftType}              from './lift-type.model';
import {LiftTypeService}       from './lift-type.service';
@Component({
    selector: 'lift-type-list',
    template: `
  <h3>Lifts:</h3>
  <ul>
    <li *ngFor="#liftType of liftTypes">
      {{ liftType.name }}
    </li>
  </ul>
  New Hero:
  <input [(ngModel)]="newLiftType.name" />
  <button (click)="addLiftType()">
    Add Lift Type
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
    styles: ['.error {color:red;}']
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
                liftType => this.liftSuccess(liftType),
                error => this.errorMessage = <any>error);
    }

    liftSuccess(liftType) {
        this.liftTypes.push(liftType)
        this.newLiftType = new LiftType();
    }


}