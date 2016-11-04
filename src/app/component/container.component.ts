/**
 * Created by yuriel on 11/1/16.
 */
import {Component, OnInit} from "@angular/core";
import {DTEvents} from "../render/eventProducer.ipc";
import {Transfer} from "../render/transfer.command";

@Component({
    moduleId: module.id,
    selector: 'dt-container',
    templateUrl: '../template/container.component.html'
})
export class DTContainerComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        DTEvents.sendExampleEvent();
        Transfer.call('adb', ['devices'], function(event, contents) {
            console.log(contents)
        }, true);
        console.log("ngOnInit loaded");
    }
}