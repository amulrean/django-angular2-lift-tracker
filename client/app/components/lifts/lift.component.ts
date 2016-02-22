import {Component, OnInit} from 'angular2/core';
import {Lift}              from './lift.model';
import {LiftListComponent} from './lift-list.component';
import {LiftService}       from './lift.service';

@Component({
    selector: 'lift',
    template: `
    <h1>Lifts</h1>
    <lift-list></lift-list>
    `,
    directives: [LiftListComponent],
    providers: [
        LiftService,
    ]
})

export class LiftComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
