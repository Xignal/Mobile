angular.module('Home', [])
.controller('HomeCtrl', function ($scope, api, $ionicLoading) {
        $ionicLoading.show({
            template : 'Loading...'
        });
        api.getSurveys(function (err, surveys) {
            if(err) {
                return console.log(err.message);
                $ionicLoading.hide();
            }
            $ionicLoading.hide();
            $scope.xignals = surveys;
        });

        $scope.refreshSurveys = function () {
            api.getSurveys(function (err, surveys) {
                if(err) {
                    return console.log(err.message);
                    $ionicLoading.hide();
                }
                $ionicLoading.hide();
                $scope.xignals = surveys;
            });
            $scope.$broadcast('scroll.refreshComplete');
        };

        //console.log('Ctrl xignals: ', $scope.xignals);
    });