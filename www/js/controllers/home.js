app.controller('HomeCtrl', function($scope, $location, AdvertisementsFactory, $ionicLoading) {
    $scope.adimgpath = "http://fontromeu-application.com//images/com_adsmanager/ads/";
    $scope.mode = "list";
    if (localStorage["advertisements"] != undefined) {
        $scope.advertisements = JSON.parse(localStorage["advertisements"]);
    } else {
        $scope.advertisements = AdvertisementsFactory.getAdvertisements().then(function(advertisements) {
            $scope.advertisements = advertisements;
            console.log($scope.advertisements);
        }, function(msg) {
            alert(msg);
        });
    }
    $scope.addAdvertisement = function($scope) {
        $location.path("/app/categories");
    }
});
