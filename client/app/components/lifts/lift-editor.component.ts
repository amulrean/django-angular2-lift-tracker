import {Component, OnInit, Input} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Lift}              from './lift.model';
import {LiftService}       from './lift.service';
@Component({
    selector: 'lift-editor',
    template: `
        <md-whiteframe class="md-whiteframe-5dp md-padding" layout="column" style="margin-bottom: 32px;">
            <div layout="row">
                <div>
                    <h3>{{ lift.lift_type.name }}</h3>
                    <p>{{ lift.date }}<p>
                    <p>Id: {{ lift.id }}</p>
                </div>
                <div>
                    <p>Sets:</p>
                    <ul>
                        <li *ngFor="#lift_set of lift.lift_sets">
                        Reps: {{ lift_set.reps }} Weight {{ lift_set.weight }}
                        </li>
                    </ul>
                </div>
            </div>
            <div layout="row" layout-align="end center">
                <button md-button (click)="deleteLift(lift)">Delete</button>
            </div>
        </md-whiteframe>
  `,
    directives: [MATERIAL_DIRECTIVES]
})

export class LiftEditorComponent implements OnInit {
    @Input() lift: Lift;
    
    constructor(private _liftService: LiftService) {
    }

    errorMessage: string;
    isEditable: boolean;

    ngOnInit() {
        this.isEditable = false;
    }

    saveLift() {
        if (!this.lift) {
            return;
        }
        this._liftService.addLift(this.lift)
            .subscribe(
            lift => this.saveLiftSuccess(lift),
            error => this.errorMessage = <any>error);
    }

    saveLiftSuccess(lift) {
        this.isEditable = false;
    }

    // deleteLift(lift: Lift) {

    //     this._liftService.deleteLift(lift)
    //         .subscribe(
    //         res => this.deleteLiftSuccess(lift),
    //         error => this.errorMessage = <any>error);
    // }

    // deleteLiftSuccess(lift) {
    //     this.getLifts();
    // }


}