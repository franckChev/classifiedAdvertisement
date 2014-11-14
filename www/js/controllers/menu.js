app.controller('MenuCtrl', function($scope, CategoriesFactory) {
	$scope.isAdmin = true;
    $scope.catimgpath = "http://fontromeu-application.com/img/2x/";
    $scope.categories = CategoriesFactory.getCategories().then(function(categories) {
        $scope.categories = categories;
    }, function(msg) {
        alert(msg);
    });
});
