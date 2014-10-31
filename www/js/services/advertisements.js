app.factory('AdvertisementsFactory', ['$http', '$q', function($http, $q) {
    var factory = {
        advertisements: false,
        getAdvertisements: function() {
            var deferred = $q.defer();
            $http.get('data/advertisements.json')
                .success(function(data, status) {
                    factory.advertisements = data;
                    deferred.resolve(factory.advertisements);
                })
                .error(function(data, status) {
                    deferred.reject('Error : getAdvertisements');
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