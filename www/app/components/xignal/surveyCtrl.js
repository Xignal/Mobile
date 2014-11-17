angular.module('Survey', [])
    .controller('SurveyCtrl', function ($scope, api, $state, $stateParams, SurveyService) {
        api.getSurvey($stateParams.id).$promise
            .then(function (data) {
                console.log('Survey: ', data);
                $scope.responses = data.responses;
                $scope.surveyId = data.id;
                $scope.question = data.questions[0].text;
                $scope.surveyName = data.name;
                $scope.surveyResponsesCount = data.responses.length;

                SurveyService.getSurveyAverage(data.questions[0].id)
                    .then(function (data) {
                        console.log('Survey ave: ', data);
                        $scope.surveyAverage = data.data[0].numberValue;
                    }, function (err) {
                        console.log('Error: ', err);
                    })
            }, function (err) {
                console.log('Error: ', err);
            });
    });