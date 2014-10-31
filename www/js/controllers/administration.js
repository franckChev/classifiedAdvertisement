app.controller('AdvertisementsLayoutCtrl', function($scope, $http, $location, findInLocalStorage, findJsonFile) {

    if (findInLocalStorage != undefined)
    {
        $scope.list = findInLocalStorage;
    }
    else
    {
        $scope.list = findJsonFile.data;
    }

    $scope.resetLayout = function(mode) {
        $scope.list = [];
        $http.get('data/' + mode + 'ads.json')
            .success(function(data, status) {
                $scope.list = data;
            })
            .error(function(data, status) {});
        delete localStorage[mode + "Ads"];
    };
    $scope.saveLayout = function(mode) {
        localStorage[mode + "Ads"] = JSON.stringify($scope.list);
        alert('Layout Saved !');
        $location.path('/app/administration');
    }
});

app.controller('AdministrationCtrl', function($scope, $location) {
    $scope.go = function(path) {
        $location.path('/app' + path);
    };
});
