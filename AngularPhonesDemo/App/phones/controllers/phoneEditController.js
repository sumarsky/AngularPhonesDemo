(function (app) {
    var controllerId = "phoneEditController";
    var phoneEditController = function (common, alerting, phonedb, $uibModalInstance, modalParams) {
        var vm = this;

        vm.errorMessage = "";
        vm.phone = null;
        vm.save = function () { phonedb.savePhone(vm.phone).then(onSaveEntrySuccess, onError); };
        vm.cancel = function () { $uibModalInstance.dismiss("cancel"); };

        activate();

        ///////////////////////////////

        function onSaveEntrySuccess(phone) {
            alerting.addSuccess("Phone saved successfully!");
            $uibModalInstance.close(phone);
        };
        function onError(reason) {
            vm.errorMessage = reason.statusText;
            if (reason.data.error_description) {
                vm.errorMessage = reason.data.error_description;
            } else if (reason.data.Message) {
                vm.errorMessage = reason.data.Message;
            }
            alerting.addDanger(vm.errorMessage);
        };

        function createEntryModel() {
            if (modalParams.phone) {
                vm.phone = angular.copy(modalParams.phone);
                vm.title = "Edit Phone";
            } else {
                vm.title = "Add Phone";
                vm.phone = {};
            }
        }

        function activate() {
            common.activateController([createEntryModel()], controllerId);
        };
    };

    app.controller("phoneEditController", phoneEditController);
}(angular.module("app")));