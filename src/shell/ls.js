/**
 * Created by yuriel on 11/2/16.
 */
exports.run = function(cb) {
    require('child_process').execFile('ls', cb);
};