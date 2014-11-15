angular.module('Home', [])
.controller('HomeCtrl', function ($scope, api) {
        api.getSurveys(function (err, surveys) {
            if(err) {
                return console.log(err.message);
            }
            $scope.xignals = surveys;
        });

        //console.log('Ctrl xignals: ', $scope.xignals);
    });