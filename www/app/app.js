angular.module('xignal', ['ionic', 'Home', 'ngCordova', 'Survey', 'ngResource', 'CreateSurvey'])

    .run(function ($ionicPlatform, $cordovaSplashscreen, $rootScope, $ionicLoading) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                //StatusBar.styleDefault();
                StatusBar.styleLightContent();
            }

            setTimeout(function () {
                $cordovaSplashscreen.hide()
            }, 3000);

        });

        // EVENTS TO FIRE IN STATE CHANGE
        // ============================================================

        // Get access to the $log provider
        var $log = angular.injector(['ng']).get('$log');

        // Callback when state becomes active.
        var onEnterCb = function ($state, $stateParams) {
            // In debug mode - log state info.
            $log.debug("Entering state : " + $state.name);
            $log.debug("State info: ", {
                currentState: $state,
                url:          $state.url,
                route:        $state.name,
                params:       $stateParams
            });
        };

        // Callback when state becomes inactive.
        var onExitCb = function ($state, toState) {
            // In debug mode - log when state become inactive.
            $log.debug("Exiting state : " + $state.name);
        };

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            // Check the 'authenticate' flag on the state to see if the state
            // is only viewable by authenticated users.
            console.log('From state: ', fromState);

            // Show loading widget at start of state change
            onExitCb(fromState);
            $ionicLoading.show({
                template: 'Loading...'
            });
        });

        // Remove the loading widget at end of state change
        $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
            onEnterCb(toState, toParams);
            $ionicLoading.hide();
        });

    });
