app.controller('CategoriesCtrl', function($scope, CategoriesFactory) {
    $scope.categories = CategoriesFactory.getCategories().then(function(categories) {
        $scope.categories = categories;
    }, function(msg) {
        alert(msg);
    });
});