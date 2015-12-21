(function (app) {
    var alertController = function ($scope, alerting) {

        $scope.hasAlerts = function () {
            return alerting.currentAlerts.length > 0;
        };

        $scope.removeAlert = function (alert) {
            alerting.removeAlert(alert);
        };

        $scope.addAlert = function () {
            alerting.addInfo("Info alert!");
        };
    };

    app.controller("alertController", alertController);
}(angular.module("app")));