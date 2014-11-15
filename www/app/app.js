angular.module('xignal', ['ionic', 'Home', 'ngCordova', 'Survey', 'CreateSurvey', 'ngResource'])

.run(function($ionicPlatform, $cordovaSplashscreen) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      //StatusBar.styleDefault();
      StatusBar.styleLightContent();
    }

    setTimeout(function() {
      $cordovaSplashscreen.hide()
    }, 3000);

  });
});
