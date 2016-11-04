import {CmdArgs} from "../model/commandArgs.model";
/**
 * Created by yuriel on 11/3/16.
 */
declare var electron: any;
const ipcRenderer = electron.ipcRenderer;
const Events = require("../../constant/event.js").events;
export class Transfer {

    static call(cmd: String, args: String[], cb: (event, contents)=>any, isLocal = false) {
        let cmdArg = new CmdArgs(cmd, args, isLocal);
        ipcRenderer.send(Events.command, cmdArg);
        let listener = function(event, contents) {
            ipcRenderer.removeListener(cmdArg.id, listener);
            cb(event, contents)
        };
        ipcRenderer.on(cmdArg.id, listener)
    }
}