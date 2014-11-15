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
                url: '^/xignal/graph',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_index.html'
                    }
                }
            })
            .state('tab.comments', {
                url: '^/xignal/comments',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_comments.html'
                    }
                }
            })
            .state('tab.contacts', {
                url: '^/xignal/contacts',
                views : {
                    'tab-home' : {
                        templateUrl : 'app/components/xignal/xignal_contacts.html'
                    }
                }
            })
            .state('tab.create', {
                url: '^/create',
                views : {
                    'tab-create' : {
                        templateUrl : 'app/components/createXignal/create_xignal_index.html'
                    }
                }
            })
            .state('tab.settings', {
                url: '^/settings',
                views : {
                    'tab-settings' : {
                        templateUrl : 'app/components/createXignal/create_xignal_index.html'
                    }
                }
            })
    });