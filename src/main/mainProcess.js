/**
 * Created by yuriel on 11/2/16.
 */
exports.load = function(electron) {
    require('./ipcEventListenner.js').load(electron.ipcMain);

    console.log("main process loaded with " + electron)
};