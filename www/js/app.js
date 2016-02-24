angular.module('app', ['ionic', 'ngCordova', 'ionic-ratings', 'ionic.contrib.drawer.vertical', 'jett.ionic.filter.bar', 'uiGmapgoogle-maps', 'tabSlideBox', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function(uiGmapGoogleMapApiProvider, $ionicConfigProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAayzuHxlfJUmzMRkBRHIxvXOen2dTYUyU',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

    // Align view-title
    $ionicConfigProvider.navBar.alignTitle('center');
    // Set custom text to back button
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
});

