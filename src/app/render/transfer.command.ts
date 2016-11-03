import {CmdArgs} from "../model/commandArgs.model";
/**
 * Created by yuriel on 11/3/16.
 */
declare var electron: any;
const ipcRenderer = electron.ipcRenderer;
const Events = require("../../constant/event.js").events;
export class Transfer {

    static call(cmd: String, args: String[], cb: (event, contents)=>any) {
        let cmdArg = new CmdArgs(cmd, args);
        ipcRenderer.send(Events.command, cmdArg);
        ipcRenderer.on(cmdArg.id, function(event, contents) {
            cb(event, contents)
        })
    }
}