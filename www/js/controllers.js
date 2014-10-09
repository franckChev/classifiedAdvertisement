var app = angular.module('starter.controllers', [])

app.factory('CategoriesFactory', ['$http', '$q', function($http, $q) {
    var factory = {
        categories: false,
        getCategories: function() {
            var deferred = $q.defer();
            $http.get('/data/categories.json')
                .success(function(data, status) {
                    factory.categories = data;
                    deferred.resolve(factory.categories);
                })
                .error(function(data, status) {
                    deffered.reject('Impossible de récupérer les articles');
                });
            return deferred.promise;
        }
    };
    return factory;
}]);


app.controller('CategoriesCtrl', function($scope, CategoriesFactory) {
    $scope.categories = CategoriesFactory.getCategories().then(function(categories) {
        $scope.categories = categories;
    }, function(msg) {
        alert(msg);
    });
});

app.factory('AdvertisementsFactory', ['$http', '$q', function($http, $q) {
    var factory = {
        advertisements: false,
        getAdvertisements: function() {
            var deferred = $q.defer();
            $http.get('/data/advertisements.json')
                .success(function(data, status) {
                    factory.advertisements = data;
                    deferred.resolve(factory.advertisements);
                })
                .error(function(data, status) {
                    deffered.reject('Impossible de récupérer les articles');
                });
            return deferred.promise;
        },
        getAdvertisement: function(id) {
            var deferred = $q.defer();
            var advertisement = {};
            var advertisements = factory.getAdvertisements().then(function(advertisements) {
                angular.forEach(advertisements, function(value, key) {
                    if (value._id == id) {
                        advertisement = value;
                    }
                });
                deferred.resolve(advertisement);
            }, function(msg) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }
    };
    return factory;
}]);

app.controller('AdvertisementsCtrl', function($scope, AdvertisementsFactory) {
    $scope.addAdvertisement = function($scope) {
        alert('salut');
    }

    $scope.advertisements = AdvertisementsFactory.getAdvertisements().then(function(advertisements) {
        $scope.advertisements = advertisements;
    }, function(msg) {
        alert(msg);
    });
})

app.controller('AdvertisementCtrl', function($scope, AdvertisementsFactory, $stateParams) {
    $scope.advertisement = AdvertisementsFactory.getAdvertisement($stateParams.id).then(function(advertisement) {
        $scope.title = advertisement.title[0];
        $scope.content = advertisement.content[0];
    }, function(msg) {
        alert(msg);
    });
})
