
(function (app) {
    var phoneListController = function (alerting, phonedb) {
        var vm = this;

        vm.title = "Phones";
        vm.phones = [];

        activate();

        /////////////////////////////////

        function activate() {
            phonedb.getPhones()
                .then(function (response) {
                    vm.phones = response.data;
                    alerting.addSuccess("Successfully loaded data!");
                }, function () {
                    alerting.addDanger("Problem occurred while retrieving data.");
                });
        };
    };

    app.controller("phoneListController", phoneListController);
}(angular.module("app")));