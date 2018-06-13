﻿(function () {

    var app = angular.module("pcBuildInterface", ["ngRoute"/*, "ui.bootstrap"*/]);

    app.controller("OrderInterface", OrderInterface);
    app.controller("HomeController", HomeController);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);

        $routeProvider
            .when("/Home", {
                templateUrl: "routes/home",
                controller: "HomeController"
            })
            .when("/Order", {
                templateUrl: "routes/order",
                controller: "OrderInterface"
            })
            .otherwise({
                redirectTo: "/Home"
            });
    });

}());