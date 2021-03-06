(function () {
    'use strict';

    angular.module('Home')
        .factory('HomeService', HomeService);

    function HomeService($http) {
        var service = {
            getXignals: getXignals
        };

        return service;

        function getXignals() {
            var url = AppConfig.API_HOST + '/surveys?limit=' + AppConfig.API_PAGING_LIMIT;
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