(function () {
    'use strict';

    angular.module('Survey')
        .factory('SurveyService', SurveyService);

    function SurveyService($http) {
        var service = {
            getXignal : getXignal
        };

        return service;

        function getXignal(id) {
            var url = 'http://onequickq.azurewebsites.net/surveys/' + id;
            var headers = {"Content-Type": "application/json; charset=utf-8"};
            return $http({method: 'GET', url: url, headers: headers})
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