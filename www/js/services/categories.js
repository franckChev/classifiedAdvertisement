app.factory('CategoriesFactory', ['$http', '$q', function($http, $q) {
    var factory = {
        categories: false,
        getCategories: function() {
            var deferred = $q.defer();
            $http.get('data/categories.json')
                .success(function(data, status) {
                    factory.categories = data;
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