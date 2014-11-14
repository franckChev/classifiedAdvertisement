app.controller('CategoriesCtrl', function($scope, CategoriesFactory, $location, $stateParams) {
    $scope.catimgpath = "http://fontromeu-application.com/img/2x/";
    CategoriesFactory.getCategories().then(function(categories) {
        if ($stateParams.id != undefined) {
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].id == $stateParams.id)
                    $scope.categories = categories[i].list;
            }
        } else {
            $scope.categories = categories;
       }
    }, function(msg) {
        alert(msg);
    });
    $scope.selectCategory = function(category) {
    	if (category.list.length != 0)
    	{
    		$location.path("app/categories/" + category.id);
    	}
    	else
    	{
	        $location.path("app/addContent/" + category.id);
    	}
    }
});
