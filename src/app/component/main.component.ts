/**
 * Created by yuriel on 11/1/16.
 */
import {Component, OnInit, AfterViewInit} from '@angular/core';

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'dt-main',
    templateUrl: '../template/main.component.html'
})
export class DTMainComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}