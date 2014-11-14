app.controller('FavouritesCtrl', function($scope, $location, AdvertisementsFactory, $ionicLoading) {
    $scope.adimgpath = "http://fontromeu-application.com//images/com_adsmanager/ads/";
    if (localStorage["advertisements"] != undefined) {
        $scope.advertisements = JSON.parse(localStorage["advertisements"]);
    } else {
        $scope.advertisements = AdvertisementsFactory.getAdvertisements().then(function(advertisements) {
            $scope.advertisements = advertisements;
        }, function(msg) {
            alert(msg);
        });
    }
});
