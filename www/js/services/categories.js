app.factory('CategoriesFactory', ['$http', '$q', function($http, $q) {
    var factory = {
        categories: false,
        getCategories: function() {
            var deferred = $q.defer();
            $http.get('data/configuration.json')
                .success(function(data, status) {
                    factory.categories = data.categories;
                    deferred.resolve(factory.categories);
                })
                .error(function(data, status) {
                    deferred.reject('Error : getCategories');
                });
            return deferred.promise;
        }
    };
    return factory;
}]);