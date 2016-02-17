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
  <input #newLiftType />
  <button (click)="addLiftType(newLiftType.value); newLiftType.value=''">
    Add Lift Type
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  styles: ['.error {color:red;}']
})

export class LiftTypeListComponent implements OnInit {
  constructor (private _liftTypeService: LiftTypeService) {}
  errorMessage: string;
  liftTypes:LiftType[];
  ngOnInit() { this.getLiftTypes(); }
  getLiftTypes() {
    this._liftTypeService.getLiftTypes()
                     .subscribe(
                       liftTypes => this.liftTypes = liftTypes,
                       error =>  this.errorMessage = <any>error);
  }
  addLiftType (name: string) {
    if (!name) {return;}
    this._liftTypeService.addLiftType(name)
                     .subscribe(
                       liftType  => this.liftTypes.push(liftType),
                       error =>  this.errorMessage = <any>error);
  }
}