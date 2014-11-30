/*globals self*/
(function () {'use strict';
function l (msg) {
    console.log(msg);
}

document.defaultView.addEventListener('message', function (e) {
    try {
        if (e.origin !== window.location.origin ||
            !e.data.webappfind.directoryPath) {
            return;
        }
    }
    catch (undesiredMessageFormat) {
        return;
    }
    self.port.emit('webappfindGetDirectoryPath');
});

self.port.on('webappfindDirectoryPath', function (result) {
    var path = result.path;
    document.defaultView.postMessage({webappfind: {method: 'local', directoryPath: path}}, window.location.origin);
});

}());
