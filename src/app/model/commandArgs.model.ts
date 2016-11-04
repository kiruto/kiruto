/**
 * Created by yuriel on 11/3/16.
 */
declare let electron: any;
export class CmdArgs {
    id: String;
    constructor(public cmd: String, public arg: String[], public isLocal: boolean = false) {
        this.id = cmd.trim() + isLocal.toString() + new Date().getTime().toString();
    }
}