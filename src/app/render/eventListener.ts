//import {Events} from "../../constant/event.constant";
var Events = require("../../constant/event.js").events;
/**
 * Created by yuriel on 11/2/16.
 */
declare var electron: any;
const ipcRenderer = electron.ipcRenderer;

export class DTEvents {

    static sendExampleEvent(): void {
        ipcRenderer.send(Events.example, 'content');
        ipcRenderer.send(Events.shell_example, '');
    }
}