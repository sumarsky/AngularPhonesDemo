(function (app) {
    var controllerId = "phoneDetailController";
    var phoneDetailController = function ($routeParams, phonedb, alerting) {
        var vm = this;

        vm.phone = null;

        activate($routeParams.id);

        ///////////////////////////////

        function activate(id) {
            phonedb.getPhone(id)
                .then(function (response) {
                    vm.phone = response.data;
                    alerting.addSuccess("Successfully loaded data!");
                }, function () {
                    alerting.addDanger("Problem occurred while retrieving data.");
                });
        }
    };

    app.controller("phoneDetailController", phoneDetailController);
}(angular.module("app")));