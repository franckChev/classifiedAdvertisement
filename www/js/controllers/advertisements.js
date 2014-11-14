app.controller('AdvertisementsCtrl', function($scope, $location, AdvertisementsFactory, $ionicLoading) {
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

app.controller('AdvertisementCtrl', function($scope, AdvertisementsFactory, $stateParams, $http) {

    $scope.list = [];

    if (localStorage["readAds"] != undefined) {
        var data = JSON.parse(localStorage["readAds"]);
        $scope.list = data;
    } else {
        $http.get('data/readads.json')
            .success(function(data, status) {
                $scope.list = data;
            })
            .error(function(data, status) {});
    }

    if (localStorage["advertisements"] != undefined) {
        var data = JSON.parse(localStorage["advertisements"]);
        angular.forEach(data, function(value, key) {
            if (value._id == $stateParams.id) {
                $scope.advertisement = value;
            }
        });
    } else {
        $scope.advertisement = AdvertisementsFactory.getAdvertisement($stateParams.id).then(function(advertisement) {
            $scope.advertisement = advertisement;
        }, function(msg) {
            alert(msg);
        });
    }
});

app.controller('AddAdvertisementCtrl', function($scope, AdvertisementsFactory, $stateParams, $http, $state, $ionicViewService) {

    $scope.mode = "edit";

    $scope.list = [];
    $scope.newAdvertisement = {};
    $scope.fields = [];

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

    $http.get('data/configuration.json')
        .success(function(data, status) {
            angular.forEach(data.fields, function(value, key) {
                var categories = value.catsid.split(',');
                for (var i = 0; i < categories.length; i++) {
                    if (categories[i] == $stateParams.id) {
                        $scope.fields.push(value);
                        break;
                    }
                }
            });
        })
        .error(function(data, status) {});


    $scope.addAdvertisement = function() {
        console.log($scope.newAdvertisement);
        $scope.newAdvertisement._id = app.guid();
        var data;

        if (localStorage["advertisements"] != undefined) {
            var data = JSON.parse(localStorage["advertisements"]);
            data.push($scope.newAdvertisement);
            localStorage["advertisements"] = JSON.stringify(data);
            $ionicViewService.nextViewOptions({
                disableAnimate: false,
                disableBack: true
            });
            $state.go('app.advertisements');
        } else {
            $scope.advertisements = AdvertisementsFactory.getAdvertisements().then(function(advertisements) {
                data = advertisements;
                data.push($scope.newAdvertisement);
                localStorage["advertisements"] = JSON.stringify(data);
                $ionicViewService.nextViewOptions({
                    disableAnimate: false,
                    disableBack: true
                });
                $state.go('app.advertisements');
            }, function(msg) {
                alert(msg);
            });
        }
    }
});
