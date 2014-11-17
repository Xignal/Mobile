angular.module('xignal')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('tab', {
                url : '/tab',
                abstract : true,
                templateUrl : 'app/tabs.html'
            })
            .state('tab.home', {
                url: '^/home',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/home/home_index.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tab.graph', {
                url: '^/xignal/graph/:id',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_index.html',
                        controller: 'SurveyCtrl'
                    }
                }
            })
            .state('tab.comments', {
                url: '^/xignal/comments/:id',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_comments.html',
                        controller: 'SurveyCtrl'
                    }
                }
            })
            .state('tab.contacts', {
                url: '^/xignal/contacts/:id',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_contacts.html',
                        controller: 'SurveyCtrl'
                    }
                }
            })
            .state('tab.create', {
                url: '^/create',
                views : {
                    'tab-create' : {
                        templateUrl : 'app/components/createXignal/create_xignal_index.html',
                        controller: 'CreateSurveyCtrl'
                    }
                }
            })
            .state('tab.settings', {
                url: '^/settings',
                views : {
                    'tab-settings' : {
                        templateUrl : 'app/components/settings/templates/settings_index.html'
                    }
                }
            })
    });