/*globals exports, require */
/*jslint todo: true*/
/**
* This is an active module of the WebAppFind Add-on
* @todo code to unregister component, remove category from category manager
*/

(function () {'use strict';

function l(msg) {
    console.log(msg);
}

var commandLineObj;
exports.main = function() {
    commandLineObj = require('./componentRegistrations')();
};

exports.onUnload = function (reason) { // ("uninstall" has issue per https://bugzilla.mozilla.org/show_bug.cgi?id=627432 ), disable, shutdown, upgrade, downgrade
    commandLineObj.unregister(reason);
};

}());
