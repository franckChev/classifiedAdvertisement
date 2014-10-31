app.controller('HomeCtrl', function($scope, $location, AdvertisementsFactory, $ionicLoading) {

    $scope.addAdvertisement = function($scope) {
        $location.path("/app/addAdvertisement");
    }
});