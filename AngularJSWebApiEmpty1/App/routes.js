(function (app) {
    "use strict";
    
    var routes = [
        { url: "/", settings: { templateUrl: "home.html" } },
        { url: "/phones", settings: { templateUrl: "phones/views/phone-list.html" } },
        { url: "/phones/:id", settings: { templateUrl: "phones/views/phone-detail.html" } }
    ];

    var registerRoutes = function ($routeProvider) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

    app.config(registerRoutes);
}(angular.module("app")));