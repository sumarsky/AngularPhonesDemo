﻿(function (app) {
    "use strict";
    
    // Collect the routes
    app.constant("routes", getRoutes());

    // Configure the routes and route resolvers
    app.config(["$routeProvider", "$locationProvider", "routes", routeConfigurator]);

    function routeConfigurator($routeProvider, $locationProvider, routes) {
        $locationProvider.html5Mode(true);

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: "/" });
    }
    // Define the routes 
    function getRoutes() {
        return [
            {
                url: "/",
                config: {
                    templateUrl: "App/home.html"
                }
            },
            {
                url: "/phones",
                config: {
                    templateUrl: "App/phones/views/phone-list.html"
                }
            },
            {
                url: "/phones/:id",
                config: {
                    templateUrl: "App/phones/views/phone-detail.html"
                }
            }
        ];
    }
}(angular.module("app")));