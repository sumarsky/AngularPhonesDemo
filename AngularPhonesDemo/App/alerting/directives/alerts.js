
(function (app) {
    var alerts = function (alerting) {
        return {
            restrict: "AE",
            templateUrl: "alerting/views/alerts.html",
            scope: true,
            controller: "alertController",
            link: function (scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        };
    };

    app.directive("alerts", alerts);
}(angular.module("app")));