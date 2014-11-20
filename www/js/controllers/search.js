app.controller('SearchCtrl', function($scope, AdvertisementsFactory) {
    $scope.mode = "search";
    $scope.mode2 = "list";
    $scope.adimgpath = "http://fontromeu-application.com//images/com_adsmanager/ads/";
    $scope.advertisementToFind = {};
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
})
