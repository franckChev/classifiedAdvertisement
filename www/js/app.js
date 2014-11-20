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
            controller: "MenuCtrl"
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
        .state('app.favourites', {
            url: "/favourites",
            views: {
                'menuContent': {
                    templateUrl: "templates/favourites.html",
                    controller: "FavouritesCtrl"
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
        .state('app.addContent', {
            url: "/addContent/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/addContent.html",
                    controller: 'AddAdvertisementCtrl'
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
        .state('app.authentification', {
            url: "/authentification",
            views: {
                'menuContent': {
                    templateUrl: "templates/authentification.html"
                }
            }
        })
        .state('app.signup', {
            url: "/signup",
            views: {
                'menuContent': {
                    templateUrl: "templates/signup.html"
                }
            }
        })
        .state('app.advertisementsLayoutWrite', {
            url: "/advertisementsLayoutWrite",
            views: {
                'menuContent': {
                    templateUrl: "templates/advertisementsLayoutWrite.html",
                    controller: 'AdvertisementsLayoutCtrl',
                    resolve: {
                        findInLocalStorage: function() {
                            if (localStorage["writeAds"] != undefined) {
                                var data = JSON.parse(localStorage["writeAds"]);
                                return data;
                            }
                        },
                        findJsonFile: function($http) {
                            return $http.get('data/writeads.json');
                        }
                    }
                }
            }
        })
        .state('app.advertisementsLayoutRead', {
            url: "/advertisementsLayoutRead",
            views: {
                'menuContent': {
                    templateUrl: "templates/advertisementsLayoutRead.html",
                    controller: 'AdvertisementsLayoutCtrl',
                    resolve: {
                        findInLocalStorage: function() {
                            if (localStorage["readAds"] != undefined) {
                                var data = JSON.parse(localStorage["readAds"]);
                                return data;
                            }
                        },
                        findJsonFile: function($http) {
                            return $http.get('data/readads.json');
                        }
                    }
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
        .state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html",
                    controller : 'SearchCtrl'
                }
            }
        })
        .state('app.categoriesById', {
            url: "/categories/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/categories.html",
                    controller: 'CategoriesCtrl'
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
