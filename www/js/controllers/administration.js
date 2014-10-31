app.controller('AdvertisementsLayoutCtrl', function($scope, $http) {
    if (localStorage["writeAds"] != undefined) {
        var data = JSON.parse(localStorage["writeAds"]);
        $scope.list = data;
    } else {
        $http.get('data/writeads.json')
            .success(function(data, status) {
                $scope.list = data;
            })
            .error(function(data, status) {});
    }
    $scope.resetLayout = function() {
        $scope.list = [];
        $http.get('data/writeads.json')
            .success(function(data, status) {
                $scope.list = data;
            })
            .error(function(data, status) {});
        delete localStorage["writeAds"];
    };
    $scope.saveLayout = function() {
        localStorage["writeAds"] = JSON.stringify($scope.list);
        alert('Layout Saved !');
    }
});

app.controller('AdministrationCtrl', function($scope, $location) {
    $scope.go = function(path) {
        $location.path('/app' + path);
    };
});
