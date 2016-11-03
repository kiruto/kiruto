/**
 * Created by yuriel on 11/2/16.
 */
exports.exec = function(query, cb) {
    const remote = require('electron');
    const app = remote.app;
    const path = app.getAppPath();
    //console.log(path);
    require('child_process').execFile(path + '/bin/osx/adb ' + query, cb)
};