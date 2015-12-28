(function (app) {

    var phonedb = function ($http, $q, $resource) {
        var service = {
            getPhone: getPhone,
            getPhones: getPhones,
            savePhone: savePhone
        };

        return service;

        ////////////////////////////////

        function getPhones() {
            var deferred = $q.defer();
            $http.get(location.origin + "/api/Phones/GetPhones")
                .then(function (response) {
                    deferred.resolve(response);
                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        }

        function getPhone(id) {
            var deferred = $q.defer();
            $http.get(location.origin + "/api/Phones/Get/" + id)
                .then(function (response) {
                    deferred.resolve(response);
                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        }

        function savePhone(phone) {
            var url = "/api/Phones/Save";

            return $resource(url).save(phone).$promise;
        }
    }

    app.factory("phonedb", phonedb);
}(angular.module("app")));