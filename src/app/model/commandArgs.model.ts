/**
 * Created by yuriel on 11/3/16.
 */
export class CmdArgs {
    id: String;
    constructor(public cmd: String, public arg: String[]) {
        this.id = this.cmd.trim() + new Date().getTime().toString();
    }
}