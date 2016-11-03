/**
 * Created by yuriel on 11/2/16.
 */
exports.run = function(cb) {
    // const remote = require('electron').remote;
    // const app = remote.app;

    // アプリ内部のパスを取得する
    // const path = app.getAppPath();

    // console.log(path);

    // ファイルを実行する
    require('child_process').execFile('ls', cb);
};