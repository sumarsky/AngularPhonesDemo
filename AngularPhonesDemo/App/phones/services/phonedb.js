(function (app) {

    var phonedb = function ($http, $q) {
        var dev = "http://localhost:56724";
        var prod = "http://angularphonesdemo.apphb.com";

        var host = prod;

        var getPhones = function () {
            var deferred = $q.defer();
            $http.get(dev + "/api/Phones/GetPhones")
                .then(function (response) {
                    deferred.resolve(response);
                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        };

        var getPhone = function (id) {
            var deferred = $q.defer();
            $http.get(dev + "/api/Phones/Get/" + id)
                .then(function (response) {
                    deferred.resolve(response);
                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        };

        return {
            getPhone: getPhone,
            getPhones: getPhones
        };
    }

    app.factory("phonedb", phonedb);
}(angular.module("app")));