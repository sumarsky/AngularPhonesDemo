﻿(function (app) {

    var phonedb = function ($http, $q) {
        var getPhones = function () {
            var deferred = $q.defer();
            $http.get(location.origin + "/api/Phones/GetPhones")
                .then(function (response) {
                    deferred.resolve(response);
                }, function () {
                    deferred.reject();
                });
            return deferred.promise;
        };

        var getPhone = function (id) {
            var deferred = $q.defer();
            $http.get(location.origin + "/api/Phones/Get/" + id)
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