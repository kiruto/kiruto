/**
 * Created by yuriel on 11/2/16.
 */
exports.exec = function(args, cb) {
    const remote = require('electron')/*.remote*/;
    const app = remote.app;
    const path = app.getAppPath();
    //console.log(path);
    require('child_process').execFile(path + '/bin/' + process.platform +'/adb', args, cb)
};