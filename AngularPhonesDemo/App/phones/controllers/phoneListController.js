(function (app) {
    var controllerId = "phoneListController";
    var phoneListController = function ($uibModal, alerting, phonedb) {
        var vm = this;

        vm.title = "Phones";
        vm.phones = [];
        vm.addPhone = function () { openSaveEntryPopup(null); };

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
        }

        function openSaveEntryPopup(selectedEntry) {
            var modalSaveEntry = $uibModal.open({
                templateUrl: "App/phones/views/phone-edit.html",
                controller: "phoneEditController as vm",
                backdrop: "static", //prevent pop-up dismissal when clicking outside the modal.
                keyboard: true,
                resolve: {
                    modalParams: function () {
                        return {
                            phone: selectedEntry
                        };
                    }
                }
            });
            //pop up event handler
            modalSaveEntry.result.then(function (resultObject) {
                activate();
            });
        }
    };

    app.controller("phoneListController", phoneListController);
}(angular.module("app")));