//. Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ui.tree'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
        })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                }
            }
        })
        .state('app.advertisements', {
            url: "/advertisements",
            views: {
                'menuContent': {
                    templateUrl: "templates/advertisements.html",
                    controller: 'AdvertisementsCtrl'
                }
            }
        })
        .state('app.advertisement', {
            url: "/advertisements/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/advertisement.html",
                    controller: 'AdvertisementCtrl'
                }
            }
        })
        .state('app.administration', {
            url: "/administration",
            views: {
                'menuContent': {
                    templateUrl: "templates/administration.html",
                    controller: 'AdministrationCtrl'
                }
            }
        })
        .state('app.advertisementsLayout', {
            url: "/advertisementsLayout",
            views: {
                'menuContent': {
                    templateUrl: "templates/advertisementsLayout.html",
                    controller: 'AdvertisementsLayoutCtrl'
                }
            }
        })
        .state('app.terms', {
            url: "/terms",
            views: {
                'menuContent': {
                    templateUrl: "templates/termsAndConditions.html"
                }
            }
        })
        .state('app.addAdvertisement', {
            url: "/addAdvertisement",
            views: {
                'menuContent': {
                    templateUrl: "templates/addAdvertisement.html",
                    controller: "AddAdvertisementCtrl"
                }
            }
        })
        .state('app.categories', {
            url: "/categories",
            views: {
                'menuContent': {
                    templateUrl: "templates/categories.html",
                    controller: 'CategoriesCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/app/home');
});
