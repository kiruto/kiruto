/**
 * Created by yuriel on 11/1/16.
 */
import {Component, OnInit} from "@angular/core";
import {DTEvents} from "../render/eventProducer.ipc";
import {Transfer} from "../render/transfer.command";
import {CyclicTask} from "../render/cyclicTask.query";

@Component({
    moduleId: module.id,
    selector: 'dt-container',
    templateUrl: '../template/container.component.html'
})
export class DTContainerComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        DTEvents.sendExampleEvent();
        let task = CyclicTask.run(
            function() {
                Transfer.call('adb', ['devices'], function(event, contents) {
                    console.log(contents)
                }, true);
            }, 3000);
    }
}