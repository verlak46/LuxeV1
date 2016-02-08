angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('start', {
        url: '/inicio',
        templateUrl: 'templates/start.html',
        controller: 'startCtrl'
    }).state('connection', {
        url: '/conexion',
        templateUrl: 'templates/connection.html',
        controller: 'connectionCtrl'
    }).state('main', {
        url: '/main',
        //cache: false,
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
    }).state('createAccount', {
        url: '/crear_cuenta',
        templateUrl: 'templates/createAccount.html',
        controller: 'createAccountCtrl'
    }).state('notifications', {
        url: '/notificaciones',
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
    }).state('confirmationCode', {
        url: '/conf_telefono',
        templateUrl: 'templates/confirmationCode.html',
        controller: 'confirmationCodeCtrl'
    }).state('ubication', {
        url: '/notificacion_ubicacion',
        templateUrl: 'templates/ubication.html',
        controller: 'ubicationCtrl'
    }).state('whoYouAre?', {
        url: '/que_eres',
        templateUrl: 'templates/whoYouAre_.html',
        controller: 'whoYouAre?Ctrl'
    }).state('profile', {
        url: '/perfil',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
    }).state('findFriends', {
        url: '/encontrar_amigos',
        templateUrl: 'templates/findFriends.html',
        controller: 'findFriendsCtrl'
    }).state('seller', {
        url: '/datos_vendedor',
        templateUrl: 'templates/seller.html',
        controller: 'sellerCtrl'
    }).state('buyer', {
        url: '/datos_comprador',
        templateUrl: 'templates/buyer.html',
        controller: 'buyerCtrl'
    }).state('tutorialBuyer', {
        url: '/tuto_comprador',
        templateUrl: 'templates/tutorialBuyer.html',
        controller: 'tutorialBuyerCtrl'
    }).state('tutorialSeller', {
        url: '/tutorial_vendedor',
        templateUrl: 'templates/tutorialSeller.html',
        controller: 'tutorialSellerCtrl'
    }).state('map', {
        url: '/mapa',
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
    }).state('myProfile', {
        url: '/mi_perfil',
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
    }).state('properties', {
        url: '/propiedades_perfil',
        templateUrl: 'templates/properties.html',
        controller: 'propertiesCtrl'
    }).state('parameters', {
        url: '/parametros',
        templateUrl: 'templates/parameters.html',
        controller: 'parametersCtrl'
    }).state('ping', {
        url: '/ping',
        templateUrl: 'templates/ping.html',
        controller: 'pingCtrl'
    }).state('brands', {
        url: '/marcas',
        templateUrl: 'templates/brands.html',
        controller: 'brandsCtrl'
    }).state('referenceAndSize', {
        url: '/reference_size',
        templateUrl: 'templates/referenceAndSize.html',
        controller: 'referenceAndSizeCtrl'
    }).state('findProduct', {
        url: '/find_product',
        templateUrl: 'templates/findProduct.html',
        controller: 'findProductCtrl'
    }).state('detax', {
        url: '/detax',
        templateUrl: 'templates/detax.html'
    }).state('remonte', {
        url: '/remonte',
        templateUrl: 'templates/remonte.html'
    }).state('wallet', {
        url: '/wallet',
        templateUrl: 'templates/wallet.html'
    }).state('luxusAdvisor', {
        url: '/luxusAdvisor',
        templateUrl: 'templates/luxusAdvisor.html',
        controller: 'luxusAdvisorCtrl'
    }).state('photo', {
        url: '/photo',
        templateUrl: 'templates/photo.html',
        controller: 'photoCtrl'
    }).state('chats', {
        url: '/chats',
        templateUrl: 'templates/chats.html',
        controller: 'ChatsCtrl'
    }).state('chat-detail', {
        url: '/chats/:chatId',
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
    }).state('news', {
        url: '/news',
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
    }).state('newsdetail', {
        url: '/newsDetail/:storeId',
        templateUrl: 'templates/newsDetail.html',
        controller: 'newsDetailCtrl'
    }).state('declare', {
        url: '/declare',
        templateUrl: 'templates/declare.html'
    }).state('contacts', {
        url: '/contacts',
        templateUrl: 'templates/contacts.html'
    }).state('asianLuxury', {
        url: '/asianLuxury',
        templateUrl: 'templates/asianLuxury.html'
    }).state('sellOut', {
        url: '/sellOut',
        templateUrl: 'templates/sellOut.html'
    }).state('favorites', {
        url: '/favorites',
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
    }).state('favoritesdetail', {
        url: '/favorites/:favoritesId',
        templateUrl: 'templates/favoritesDetail.html',
        controller: 'favoritesDetailCtrl'
    }).state('mypublications', {
        url: '/mypublications',
        templateUrl: 'templates/myPublications.html',
        controller: 'mypublicationsCtrl'
    }).state('mypublicationsdetail', {
        url: '/mypublications/:mypublicationsId',
        templateUrl: 'templates/myPublicationsDetail.html',
        controller: 'mypublicationsDetailCtrl'
    }).state('findCategories', {
        url: '/findCategories',
        templateUrl: 'templates/findCategories.html',
        controller: 'findCategoriesCtrl'
    }).state('findBrands', {
        url: '/findBrands',
        templateUrl: 'templates/findBrands.html',
        controller: 'findBrandsCtrl'
    }).state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.html',
        controller: 'categoriesCtrl'
    }).state('filterMarks', {
        url: '/filterMarks',
        templateUrl: 'templates/filterMarks.html',
        controller: 'filterMarksCtrl'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/inicio');
});