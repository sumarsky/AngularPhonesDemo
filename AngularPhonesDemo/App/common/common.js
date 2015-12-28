(function (app) {

    app.provider("commonConfig", function () {
        this.config = {
            controllerActivateSuccessEvent: "controller.activateSuccess"
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    function common($q, $rootScope, $timeout, commonConfig) {
        var service = {
            $broadcast: $broadcast,
            activateController: activateController
        };

        return service;

        ////////////////////

        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }
    };

    app.factory("common", common);
}(angular.module("app")));