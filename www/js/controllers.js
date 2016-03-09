angular.module('app.controllers', [])
     
.controller('connectionCtrl', function($scope, $ionicPopup) {
	// Triggered on a button click, or some other target
	$scope.showPopup = function() {
	  $scope.data = {};

	  // An elaborate, custom popup
	  var myPopup = $ionicPopup.show({
	    template: '<input type="text" ng-model="data.wifi">',
	    title: 'Recover password',
	    subTitle: 'Please enter your account email',
	    scope: $scope,
	    buttons: [
	      { text: 'Cancel' },
	      {
	        text: '<b>Save</b>',
	        type: 'button-stable',
	        onTap: function(e) {
	          if (!$scope.data.wifi) {
	            //don't allow the user to close unless he enters data
	            e.preventDefault();
	          } else {
	            return $scope.data.wifi;
	          }
	        }
	      }
	    ]
	  });

	  myPopup.then(function(res) {
	  	if (res !== undefined)
	  		$scope.showAlert();
	    console.log('Tapped!', res);
	  });
	};

	$scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Email Sent!',
	     template: 'Please check your email',
	     okType: 'button-stable'
	   });

	   alertPopup.then(function(res) {
	   });
 	};
})

.controller('mainCtrl', function($scope, $state, $ionicLoading, $ionicPopover, GetMarksFactory) {

    map = true;

    // Setup the loader
    $ionicLoading.show({
        content: 'Cargando...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0,
        duration: 2000
    });

    // Change Tab
    $scope.changeTab = function() {
        map = !map;
    };

    // Ratings
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
    };

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
    };

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    // Maps
    $scope.randomMarkers = [];

    $scope.map = {
        center: {
            latitude: 48.8534100,
            longitude: 2.3488000
        },
        zoom: 11,
        options: {
            zoomControl: false
        }
    };

    $scope.onClick = function(marker, eventName, model) {
        model.show = !model.show;
    };

    // Rewrite marker's on map on change
    $scope.$watch(function() {
        return GetMarksFactory.get();
    }, function(newValue, oldValue) {
        $scope.randomMarkers = newValue;
    });

    // Geolocation
    /*navigator.geolocation.getCurrent
    Position(function(pos) {
      $scope.map.center = pos.coords;
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });*/
})

.controller('eventsCtrl', function($scope, $ionicLoading, $ionicPopover, $state) {
    // Setup the loader
    $ionicLoading.show({
        content: 'Cargando...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0,
        duration: 2000
    });

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    var markers = [{
                id: 1,
                idKey: "id",
                latitude: 48.8534100,
                longitude: 2.3488000,
                description: 'Paris Fashion Week 2016',
                categorie: 'Fashion',
                image: 'img/favoritos/paris-fashion.jpg',
                show: false,
                },
                {
                id: 2,
                idKey: "id",
                latitude: 48.8134100,
                longitude: 2.3288000,
                description: 'Luxury Blogger II Edition',
                categorie: 'Event',
                image: 'img/159155_logo_luxurybe2.jpg',
                show: false,
                },
                {
                id: 3,
                idKey: "id",
                latitude: 48.880691,
                longitude: 2.375450,
                description: 'Dior Fall collection',
                categorie: 'Fashion',
                image: 'img/Dior-Paris-fashion-week5.jpg',
                show: false,
                }];
    // Map

    $scope.map = {
        center: {
            latitude: 48.8534100,
            longitude: 2.3488000
        },
        zoom: 11,
        options: {
            zoomControl: false
        }
    };

    $scope.randomMarkers = markers;

    $scope.onClick = function(marker, eventName, model) {
        model.show = !model.show;
    };
    
})

.controller('tutorialBuyerCtrl', function($scope) {
    //SLIDER
    $scope.selector = [{
        id: '1',
        //cat: 'LOCATE',
        text: 'Locate seller exchange with him and create a link privileged'
        //src: "img/seleccion_tipos/plato-01.png"
    }, {
        id: '2',
        //cat: 'TIME',
        text: 'Save time, get a board, availability, a fare, Service distance'
        //src: "img/seleccion_tipos/plato-02.png"
    }, {
        id: '3',
        //cat: 'PLACE'
        text: 'Most of the news luxury in the place where you are'
        //src: "img/seleccion_tipos/plato-03.png"
    }, {
        id: '4',
        //cat: 'AVAILABILITY'
        text: 'ping: before or during your travel, looking for the price and / or availability in the towns where you are going move'
        //src: "img/seleccion_tipos/plato-03.png"
    }];

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})
   
.controller('tutorialSellerCtrl', function($scope) {
    //SLIDER
    $scope.selector = [{
        id: '1',
        //cat: 'VISIBILITY',
        text: 'Give yourself more visibility attract new where customers they are, get talking with them'
        //src: "img/seleccion_tipos/plato-01.png"
    }, {
        id: '2',
        //cat: 'CONTACTS',
        text: 'Organize contacts customers following you all along of your career'
        //src: "img/seleccion_tipos/plato-02.png"
    }, {
        id: '3',
        //cat: 'SALES',
        text: 'The more you to declare sales, more you have some and contacts you better will be noted by your customers,the more you will be put in before'
        //src: "img/seleccion_tipos/plato-03.png"
    }];
    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})
      
.controller('parametersCtrl', function($scope, $ionicModal, $ionicPopup) {

    $ionicModal.fromTemplateUrl('templates/modalWhoWeAm.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.showPopup = function() {

        var myPopup = $ionicPopup.show({

            title: 'Privacy Policy',
            subTitle: 'The purpose of this policy is to outline the acceptable use of information systems and information systems infrastructure owned or provided by The University of North Carolina at Greensboro (hereinafter "the University") or which contain University information assets, or which utilize the information system infrastructure maintained by the University.',
            buttons: [

                {
                    text: '<b>Close</b>',
                    type: 'button-stable',
                    onTap: function(e) {

                    }
                }
            ]
        });
    };

    $scope.showPopupCGU = function() {

        var myPopup = $ionicPopup.show({

            title: 'CGU',
            subTitle: '',
            buttons: [

                {
                    text: '<b>Close</b>',
                    type: 'button-stable',
                    onTap: function(e) {

                    }
                }
            ]
        });
    };
})
      
.controller('categoriesCtrl', function($scope, $state, $ionicPopover, DataFactory) {
    $scope.categories = DataFactory.all();

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.categorySelection= function(numCategory) {
        DataFactory.setCategoryNumber(numCategory);
        $state.go("brands");
    };
})

.controller('categoriesCCtrl', function($scope, $state, $ionicPopover, DataFactory) {
    $scope.categories = DataFactory.all();

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.categorySelection= function(numCategory) {
        DataFactory.setCategoryNumber(numCategory);
        $state.go("brands");
    };
})

.controller('brandsCtrl', function($scope, $state, $ionicPopover, DataFactory) {
    $scope.categories = DataFactory.all();

    $scope.categoryNumber = DataFactory.getCategoryNumber();

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.sizeSelection = function(brand) {
        DataFactory.setBrand(brand);
        $state.go("referenceAndSize");
    };
})

.controller('referenceAndSizeCtrl', function($scope, $state, $ionicPopup, DataFactory) {
    $scope.categories = DataFactory.all();
    $scope.brand = DataFactory.getBrand();
    $scope.categoryNumber = DataFactory.getCategoryNumber();

    $scope.items = [
    { text: "New", value: "nw" , checked: "true"},
    { text: "Second hand", value: "sh" }
    ];

    $scope.data = {
    item: 'nw'
    };

    $scope.agentContact = function() {
        var myPopup = $ionicPopup.show({

            title: 'Ping Sent',
            subTitle: 'The closest agent contact you and help you in your preferences ',
            buttons: [

                {
                    text: '<b>Close</b>',
                    type: 'button-stable',
                    onTap: function(e) {

                    }
                }
            ]
        });
        $state.go("main");
    };
})

.controller('ChatsCtrl', function($scope, $stateParams, $ionicFilterBar, $state, $ionicPopover, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.filter = function() {
    $ionicFilterBar.show();
  };
  // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    // Ratings
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
    };

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
    };

})

.controller('ContactsCtrl', function($scope, $ionicFilterBar, $state, $ionicPopover) {
  // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    // Ratings
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
    };

    $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
    };


  $scope.filter = function() {
    $ionicFilterBar.show();
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('mypublicationsCtrl', function($scope, FavoriteFactory) {
    $scope.publications = FavoriteFactory.all();
})

.controller('favoritesCtrl', function($scope, FavoriteFactory) {
    $scope.favorites = FavoriteFactory.all();
})

.controller('favoritesDetailCtrl', function($scope, FavoriteFactory, $stateParams) {
    $scope.fav = FavoriteFactory.get($stateParams.favoritesId);
})

.controller('mypublicationsDetailCtrl', function($scope, FavoriteFactory, $stateParams) {
    $scope.publication = FavoriteFactory.get($stateParams.mypublicationsId);
})

.controller('newsCtrl', function($scope, $ionicPopover, $state, StoresFactory) {
    $scope.stores=StoresFactory.all();
    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });
})

.controller('newsDetailCtrl', function($scope, StoresFactory, $stateParams) {
    $scope.store = StoresFactory.get($stateParams.storeId);

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };
})

.controller('findCategoriesCtrl', function($scope, $state, DataFactory) {
    $scope.categories = DataFactory.all();
    $scope.categoryNumber = {};

    $scope.categorySelection = function(numCategoria) {
        DataFactory.setCategoryNumber(numCategoria);
        $state.go("findBrands");
    };
})

.controller('findCategoriesCCtrl', function($scope, $state, DataFactory) {
    $scope.categories = DataFactory.all();
    $scope.categoryNumber = {};

    $scope.categorySelection = function(numCategoria) {
        DataFactory.setCategoryNumber(numCategoria);
        $state.go("findBrandsC");
    };
})
   
.controller('findBrandsCtrl', function($scope, $state, DataFactory, GetMarksFactory) {
    $scope.categories = DataFactory.all();

    $scope.categoryNumber = DataFactory.getCategoryNumber();

    $scope.sizeSelection = function() {
        var markers = [{
                id: 1,
                idKey: "id",
                latitude: 48.8534100,
                longitude: 2.3488000,
                description: 'Luxury clothes seller',
                categorie: 'Dana Barrett',
                image: 'img/business-sellers.jpg',
                show: false,
                },
                {
                id: 2,
                idKey: "id",
                latitude: 48.8134100,
                longitude: 2.3288000,
                description: 'A movie to discover on Dior Mag.',
                categorie: 'Dior Homme Store',
                image: 'img/stores/dior1.jpg',
                show: false,
                },
                {
                id: 3,
                idKey: "id",
                latitude: 48.880691,
                longitude: 2.375450,
                description: 'Established in Paris in 1847',
                categorie: 'Cartier',
                image: 'img/stores/cartier1.jpg',
                show: false,
                },
                {
                id: 4,
                idKey: "id",
                latitude: 48.8834100,
                longitude: 2.3188000,
                description: 'A Delight for Milan Auto Enthusiasts',
                categorie: 'Casa Maserati',
                image: 'img/stores/mas1.jpg',
                show: false,
                },
                {
                id: 5,
                idKey: "id",
                latitude: 48.8134100,
                longitude: 2.3188000,
                description: 'Creative director Riccardo Tisci recently collaborated with architect Joseph Dirand',
                categorie: 'Givenchy',
                image: 'img/stores/given1.jpg',
                show: false,
                },
                {
                id: 6,
                idKey: "id",
                latitude: 48.848168,
                longitude: 2.393990,
                description: 'Luxury cars seller',
                categorie: 'Rod James',
                image: 'img/seller_2.jpg',
                show: false,
                }];

    GetMarksFactory.post(markers);
    $state.go("filterMarks");
    };
})

.controller('filterMarksCtrl', function($scope) {
    $scope.devList = [{
        text: "Mono-boutique",
        checked: true,
        img: 'img/markers/0.png'
    }, {
        text: "Multi-brands stores",
        checked: false,
        img: 'img/markers/1.png'
    }, {
        text: "Second hand stores",
        checked: false,
        img: 'img/markers/2.png'
    }, {
        text: "Outlets",
        checked: false,
        img: 'img/markers/3.png'
    },{
        text: "Airports",
        checked: false,
        img: 'img/markers/0.png'
    }, {
        text: "Department stores",
        checked: false,
        img: 'img/markers/1.png'
    }, {
        text: "Rental",
        checked: false,
        img: 'img/markers/2.png'
    }];

    $scope.pushNotificationChange = function() {
        console.log('Push Notification Change', $scope.pushNotification.checked);
    };

    $scope.pushNotification = {
        checked: true
    };
    $scope.emailNotification = 'Subscribed';
})

.controller("photoCtrl", function($scope, $ionicPopover, $state) {

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.photos = [{
        title: "Gold Coast RC 11",
        category: "Boat",
        img: 'img/photos/boat.jpg'
    }, {
        title: "Hotel continental luxe",
        category: "Hotel",
        img: 'img/photos/continental.jpg'
    }, {
        title: "Diamond",
        category: "Jewelry",
        img: 'img/photos/diamond.jpg'
    }, {
        title: "Hardrock luxe Hotel",
        category: "Hotel",
        img: 'img/photos/hardrock.jpg'
    }, {
        title: "Private jet",
        category: "Jet",
        img: 'img/photos/jet.jpg'
    }, {
        title: "Masserati",
        category: "Cars",
        img: 'img/photos/maserati.jpg'
    }, {
        title: "Bugatti",
        category: "Cars",
        img: 'img/photos/bugatti.jpg'
    }];
})

.controller('luxusAdvisorCtrl', function($scope, $ionicPopover, $state) {

    $scope.rates = [{
        name: "Louis Vuitton",
        category: "Store",
        img: 'img/agent-store/6.jpg'
    }, {
        name: "Chanel",
        category: "Store",
        img: 'img/agent-store/7.jpg'
    }];

    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });
})

.controller('startCtrl', function($scope) {
    
})

.controller('createAccountCtrl', function($scope) {

})
   
.controller('notificationsCtrl', function($scope) {

})
   
.controller('confirmationCodeCtrl', function($scope) {

})
   
.controller('ubicationCtrl', function($scope) {

})
   
.controller('whoYouAre?Ctrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('findFriendsCtrl', function($scope) {

})
   
.controller('sellerCtrl', function($scope) {

})
   
.controller('buyerCtrl', function($scope) {

})
/*.controller('mapCtrl', function($scope, $ionicLoading) {
  
})*/

.controller('pingCtrl', function($scope, $state, $ionicPopover, DataFactory) {
    // Popover links

    $scope.goDeclare = function() {
        $state.go("declare");
        $scope.popover.hide();
    };

    $scope.goPing = function() {
        $state.go("categories");
        $scope.popover.hide();
    };

    $scope.goPayment = function() {
        $state.go("wallet");
        $scope.popover.hide();
    };

    $scope.goDetax = function() {
        $state.go("detax");
        $scope.popover.hide();
    };

    $scope.goFavorites = function() {
        $state.go("favorites");
        $scope.popover.hide();
    };

    $scope.goMyProfile = function() {
        $state.go("myProfile");
        $scope.popover.hide();
    };

    $scope.goSettings = function() {
        $state.go("parameters");
        $scope.popover.hide();
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope,
    }).then(function(popover) {
        $scope.popover = popover;
    });
})

.controller('findProductCtrl', function($scope) {

})

.controller('myProfileCtrl', function($scope) {

})
   
.controller('propertiesCtrl', function($scope) {

})

.filter('calendar', calendar);
 
function calendar () {
  return function (time) {
    if (! time) return;
 
    return moment(time).calendar(null, {
      lastDay : 'DD/MM/YY',
      sameDay : 'LT',
      lastWeek : 'DD/MM/YY',
      sameElse : 'DD/MM/YY'
    });
  };
}