// Can't get this service to work - doesn't get injected for some reason
// and I can't figure out why. Will leave here to review later.

(function () {
    'use strict';

    angular.module('CreateSurvey')
        .factory('CreateSurveyService', CreateSurveyService);

    function CreateSurveyService($http) {
        var service = {
            createSurvey: createSurvey
        };

        return service;

        function createSurvey(data) {
            var url = 'http://onequickq.azurewebsites.net/survey';
            var headers = {"Content-Type": "application/json; charset=utf-8"};
            return $http({method: 'POST', data: data, url: url, headers: headers})
                .success(function (data, status, headers, config) {
                    console.log("Data: ", data);
                    return data;
                })
                .error(function (data) {
                    return data;
                });
        }
    }
})();