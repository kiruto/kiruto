/**
 * Created by yuriel on 11/1/16.
 */
import {Component, OnInit} from "@angular/core";
import {DTEvents} from "../render/eventProducer.ipc";

@Component({
    moduleId: module.id,
    selector: 'dt-container',
    templateUrl: '../template/container.component.html'
})
export class DTContainerComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        DTEvents.sendExampleEvent();
        console.log("ngOnInit loaded");
    }
}