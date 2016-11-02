/**
 * Created by yuriel on 11/2/16.
 */
exports.load = function(electron) {
    let EventListener = require('./ipcEventListenner.js');
    new EventListener().load(electron.ipcMain);

    console.log("main process loaded with " + electron)
};