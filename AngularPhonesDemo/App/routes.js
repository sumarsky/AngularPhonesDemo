(function (app) {
    "use strict";

    var routes = [
        { url: "/", settings: { templateUrl: "App/home.html" } },
        { url: "/phones", settings: { templateUrl: "App/phones/views/phone-list.html" } },
        { url: "/phones/:id", settings: { templateUrl: "App/phones/views/phone-detail.html" } }
    ];

    var registerRoutes = function ($routeProvider, $locationProvider) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.settings);
        });

        $routeProvider.otherwise({ redirectTo: "/" });

        $locationProvider.hashPrefix("!").html5Mode(true);
    };

    app.config(registerRoutes);
}(angular.module("app")));