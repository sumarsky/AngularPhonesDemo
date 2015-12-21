(function (app) {
    
    var alerting = function ($timeout) {

        var currentAlerts = [];
        
        var removeAlert = function (alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] == alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        };

        var addAlert = function (type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);

            $timeout(function () {
                removeAlert(alert);
            }, 5000);
        };

        var addSuccess = function (message) {
            addAlert("success", message);
        };
        var addInfo = function (message) {
            addAlert("info", message);
        };
        var addWarning = function (message) {
            addAlert("warning", message);
        };
        var addDanger = function (message) {
            addAlert("danger", message);
        };
        
        return {
            removeAlert: removeAlert,
            addAlert: addAlert,
            addSuccess: addSuccess,
            addInfo: addInfo,
            addWarning: addWarning,
            addDanger: addDanger,
            currentAlerts: currentAlerts
        };
    };

    app.factory("alerting", alerting);

}(angular.module("app")));