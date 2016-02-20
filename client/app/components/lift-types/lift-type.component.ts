import {Component, OnInit} from 'angular2/core';
import {LiftType}              from './lift-type.model';
import {LiftTypeListComponent} from './lift-type-list.component';
import {LiftTypeService}       from './lift-type.service';

@Component({
    selector: 'lift-types',
    template: `
    <h1>Lift Types</h1>
    <lift-type-list></lift-type-list>
    `,
    directives: [LiftTypeListComponent],
    providers: [
        LiftTypeService,
    ]
})

export class LiftTypeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
