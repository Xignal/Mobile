angular.module('CreateSurvey', [])
    .controller('CreateSurveyCtrl', function ($scope, api, $state) {

        $scope.newSurveyData = {
            "questions": [
                {
                    "text":"How likely would you be to recommend Xignal to people you know?",
                    "type":"range"
                },
                {
                    "text":"If you would like to be contacted about the information in the presentation, enter your email below.",
                    "type":"string"
                }
            ],
            "userId": 1000,
            "name": "",
            "description": "",
            "location": "the grid akl",
            "shortUrl": "http://a_short_url.com"
        };
        $scope.createSurvey = function () { createSurvey(); };

        function createSurvey() {
            api.createSurvey($scope.newSurveyData)
                .then(function (data) {
                    $state.go('tab.home');
                }, function (err) {
                    console.log("Error: ", err);
                });
        }

    });