(function () {
    describe("alertController", function () {
        var scope, controller;

        beforeEach(function () {
            module("app");

            inject(function ($rootScope, $controller, alerting) {
                scope = $rootScope.$new();
                controller = $controller("alertController",
                    { $scope: scope, alerting: alerting });
            });
        });

        it("$scope functions to be defined!", function () {
            expect(scope.addAlert).toBeDefined();
            expect(scope.removeAlert).toBeDefined();
            expect(scope.hasAlerts).toBeDefined();
        });

        it("expect scope.hasAlerts to be true when we have added alert", function () {
            scope.addAlert();
            expect(scope.hasAlerts()).toBe(true);
        });

        it("expect scope.hasAlerts to be false at start", function () {
            expect(scope.hasAlerts()).toBe(false);
        });

    });
})();