/**
 * Created by yuriel on 11/2/16.
 */
//let events = require("../constant/event.json");
let Events = require("../constant/event.js").events;

exports.load = function(ipcMain) {
    ipcMain.on(Events.example, function (event, content) {
        console.log(content)
    });

    console.log("ipc main listener loaded");
};