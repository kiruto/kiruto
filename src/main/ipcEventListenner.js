/**
 * Created by yuriel on 11/2/16.
 */
//let events = require("../constant/event.json");
let Events = require("../constant/event.js").events;

exports.load = function(ipcMain) {
    ipcMain.on(Events.example, function (event, content) {
        console.log(content)
    });

    ipcMain.on(Events.shell_example, function (event, content) {
        console.log("ls start");
        require('../shell/ls.js').run(
            function(err, stdout, stderr){
                console.log(stdout)
            }
        );
        console.log("ls end");
        require('../shell/adb.js').exec(['devices'], function(err, stdout, stderr) {
            console.log(stdout)
        })
    });

    ipcMain.on(Events.command, function(event, args) {
        console.log("cmd start: " + args.cmd + " " + args.arg);
        let path = require('electron').app.getAppPath();
        if (args.isLocal) {
            args.cmd = path + '/bin/' + process.platform + "/" + args.cmd;
        }
        require('child_process').execFile(args.cmd, args.arg, function(err, stdout, stderr) {
            if (err) {
                throw err
            } else {
                event.sender.send(args.id, stdout)
            }
        });
    });

    console.log("ipc main listener loaded");
};