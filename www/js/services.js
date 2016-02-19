angular.module('app.services', [])

.factory('DataFactory', [function() {

    var numCategory;
    var brand;
    var categories = [{
        id: '0',
        name: 'Art',
        img: 'img/iconcategory/art.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '1',
        name: 'Boating',
        img: 'img/iconcategory/boating.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '2',
        name: 'Cigars',
        img: 'img/iconcategory/cigars.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '3',
        name: 'Fashion & Leather goods',
        img: 'img/iconcategory/fashion.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '4',
        name: 'Food & Beverage',
        img: 'img/iconcategory/food.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '5',
        name: 'Furnitures',
        img: 'img/iconcategory/furnitures.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '6',
        name: 'Hôtels Luxe 5*',
        img: 'img/iconcategory/hotel.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '7',
        name: 'Jet',
        img: 'img/iconcategory/jet.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '8',
        name: 'Luxury Cars',
        img: 'img/iconcategory/car.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '9',
        name: 'Malletiers',
        img: 'img/iconcategory/malletier.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '10',
        name: 'Perfumes & Cosmetics',
        img: 'img/iconcategory/perfume.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '11',
        name: 'Real Estates',
        img: 'img/iconcategory/real-estate.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '12',
        name: 'To be discovered',
        img: 'img/iconcategory/to-be-discovered.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '13',
        name: 'Watches & Jewelery',
        img: 'img/iconcategory/diamond.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }, {
        id: '14',
        name: 'Wines & Spirits',
        img: 'img/iconcategory/wine.png',
        brands: [{
            brandName: 'Blancpain'
        }, {
            brandName: 'Audemars Piguet'
        }, {
            brandName: 'Boucheron'
        }, {
            brandName: 'Breguet'
        }, {
            brandName: 'Breitling'
        }, {
            brandName: 'Bulgari'
        }, {
            brandName: 'Cartier'
        }, {
            brandName: 'Chanel'
        }, {
            brandName: 'Chaumet'
        }, {
            brandName: 'MCorum'
        }, {
            brandName: 'De Grisogono'
        }, {
            brandName: 'Real Estates'
        }, {
            brandName: 'DeWitt'
        }, {
            brandName: 'Dior'
        }, {
            brandName: 'F.-P. Journe'
        }, {
            brandName: 'Franck Muller'
        }, {
            brandName: 'Glashütte Original'
        }, {
            brandName: 'H. Moser & Cie'
        }, {
            brandName: 'Harry Winston'
        }, {
            brandName: 'Hermes'
        }, {
            brandName: 'Hublot'
        }, {
            brandName: 'IWC'
        }, {
            brandName: 'Jaeger-Le Coultre'
        }, {
            brandName: 'Jaquet Droz'
        }, {
            brandName: 'JeanRichard'
        }, {
            brandName: 'Longines'
        }, {
            brandName: 'Louis Vuitton'
        }, {
            brandName: 'MB&F'
        }, {
            brandName: 'Mikimoto'
        }, {
            brandName: 'Montblanc'
        }, {
            brandName: 'Omega'
        }, {
            brandName: 'Patek Philippe'
        }, {
            brandName: 'Piaget'
        }, {
            brandName: 'Rado'
        }, {
            brandName: 'Rolex'
        }, {
            brandName: 'Tiffany&Co'
        }, {
            brandName: 'Ulysse Nardin'
        }, {
            brandName: 'Vacheron Constantin'
        }, {
            brandName: 'Van Cleef'
        }]
    }];
    return {
        all: function() {
            return categories;
        },
        setCategoryNumber: function(value) {
            numCategory = value;
        },
        getCategoryNumber: function() {
            return numCategory;
        },
        setBrand: function(value) {
            brand = value;
        },
        getBrand: function() {
           return brand;
        }
    };
}])

.factory('Chats', function() {
    
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look my products!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('FavoriteFactory', function() {
    var favorite = [{
            id: 0,
            title: 'Paris Fashion Week',
            category: 'Luxe cars',
            description: 'Paris Fashion Week is a clothing trade show held biannually in Paris',
            longdescription: 'Paris Fashion Week is a clothing trade show held biannually in Paris, France with spring/summer and autumn/winter events held each year. Dates are determined by the French Fashion Federation. Currently, Fashion Week is held in the Carrousel du Louvre, as well as at various other venues throughout the city. In addition to ready-to-wear shows, there are men\'s and haute couture shows, which are held semiannually for the spring/summer and autumn/winter seasons.',
            price: '1-8/03/2016',
            direction: 'Direction',
            images: {
                url1: 'img/favoritos/paris-fashion2.jpg',
                url2: 'img/favoritos/paris-fashion.jpg',
                url3: 'img/favoritos/paris-fashion3.jpg'
            }
        }, {
            id: 1,
            title: 'Ferrari F430 Berlinetta',
            category: 'Luxe cars',
            description: 'One of the lowest mileage F430 Spiders available in the US right now.',
            longdescription: 'Straight out of a collection, never tracked. One of the lowest mileage F430 Spiders available in the US right now. No paint work or stories. Challenge Wheels, Power Daytonas with red piping, red contrast stitching on dash,shields, and much more. Completely stock and everything works.',
            price: 'Price: 164900 €',
            direction: 'Direction',
            images: {
                url1: 'img/favoritos/fer4301.jpg',
                url2: 'img/favoritos/fer4302.jpg',
                url3: 'img/favoritos/fer4302.jpg'
            }
        }, {
            id: 2,
            title: 'Josh Venkman',
            category: 'Planes',
            description: 'Used Planes',
            longdescription: 'for more information call 666666665',
            direction: 'Direction',
            price: 'Paris, France',
            images: {
                url1: 'img/favoritos/plane1.jpg',
                url2: 'img/favoritos/plane2.jpg',
                url3: 'img/favoritos/plane3.jpg'
            }
        }
    ];

    return {

        all: function() {
            return favorite;
        },
        get: function(favoriteId) {
            for (var i = 0; i < favorite.length; i++) {
                if (favorite[i].id === parseInt(favoriteId)) {
                    return favorite[i];
                }
            }
            return null;
        }
    };
})

.factory('StoresFactory', function() {
    var stores = [{
            id: 0,
            title: 'Dior Homme store',
            category: 'Fashion',
            description: 'Dior Homme store - Design district Miami - Miami Art Basel',
            longdescription: 'A black and white movie, quite Dior men, filmed in New-York, which  set few personalities of the worldwide artistic scene, the Ukrainian ballet dancer Sergei Polunin, the English violinist Charlie Siem, the Californian pianist Mason Buccheri and the quite young violinist Claudius Agrippa. A movie, where you would understand, many influences are crossing each other,  those obvious of dance and classic music and those which are less obvious but which are directly linked to Bruce. A movie to discover on Dior Mag.',
            price: '105950',
            direction: 'Direction',
            images: {
                url1: 'img/stores/dior1.jpg',
                url2: 'img/stores/dior2.jpg',
                url3: 'img/stores/dior3.jpg'
            }
        }, {
            id: 1,
            title: 'Casa Maserati',
            category: 'Luxe cars',
            description: 'A Delight for Milan Auto Enthusiasts',
            longdescription: 'Shopping for couture clothing can be truly enjoyed with a glass of bubbly and a personal stylist at your service. And now it is possible to get the same regal treatment when you go car shopping at Casa Maserati – an exclusive retail store and bar lounge.From picking up super cars for a test drive to indulging in a peg of exquisite whiskey, this one-of-a-kind store will combine your love for automobiles and high-end parties.',
            price: '164900',
            direction: 'Direction',
            images: {
                url1: 'img/stores/mas1.jpg',
                url2: 'img/stores/mas2.jpg',
                url3: 'img/stores/mas3.jpg'
            }
        }, {
            id: 2,
            title: 'Louis Vuitton L’Ecriture',
            category: 'clothes',
            description: 'We all know Louis Vuitton makes a great bag.',
            longdescription: 'We all know Louis Vuitton makes a great bag, but did you know the brand has a store dedicated entirely to its luxurious writing accoutrements?',
            direction: 'Louis Vuitton L’Ecriture, 6 place Saint-Germain des Prés, 75006 Paris',
            images: {
                url1: 'img/stores/vuitt1.jpg',
                url2: 'img/stores/vuitt2.jpg',
                url3: 'img/stores/vuitt3.jpg'
            }
        }, {
            id: 3,
            title: 'Chanel',
            category: 'Clothes',
            description: 'The recently refurbished avenue Montaigne boutique is devoted to the label’s extensive line of fashion accessories,',
            longdescription: 'The recently refurbished avenue Montaigne boutique is devoted to the label’s extensive line of fashion accessories, from iconic Chanel handbags and costume jewellery to an array of seasonal shoes and accessories.',
            price: '6900',
            direction: 'Chanel, 42 avenue Montaigne, 75008 Paris, +33 (0)1 4723 7412',
            images: {
                url1: 'img/stores/chanel1.jpg',
                url2: 'img/stores/chanel2.jpg',
                url3: 'img/stores/chanel3.jpg'
            }
        }, {
            id: 4,
            title: 'Cartier',
            category: 'jewelry',
            description: 'Established in Paris in 1847',
            longdescription: 'Established in Paris in 1847 and favoured by royalty around the world, Cartier is an essential stop on any luxury shopping trip. Browse the boutique en route to the Opéra de Paris, situated at the top of the boulevard.',
            price: '5999',
            direction: 'Cartier, 12 boulevard des Capucines,',
            images: {
                url1: 'img/stores/cartier1.jpg',
                url2: 'img/stores/cartier2.jpg',
                url3: 'img/stores/cartier3.jpg'
            }
        }, {
            id: 5,
            title: 'Givenchy',
            category: 'Clothes',
            description: 'Creative director Riccardo Tisci recently collaborated with architect Joseph Dirand',
            longdescription: 'Creative director Riccardo Tisci recently collaborated with architect Joseph Dirand to create a new flagship store. It is inspired by the boxes that were originally used by the brand’s founder, Hubert de Givenchy, and are still used to deliver the haute collection to clients today. Each room in the new store on avenue Montaigne is its own box, with felt walls, solid oak floors, gold mirroring and polished steel.',
            price: '105950',
            direction: 'Givenchy, 36 avenue Montaigne, 75008 Paris, +33 (0)1 4443 9990 ',
            images: {
                url1: 'img/stores/given1.jpg',
                url2: 'img/stores/given2.jpg',
                url3: 'img/stores/given3.jpg'
            }
        }, {
            id: 6,
            title: 'Dior Homme store',
            category: 'Fashion',
            description: 'Dior Homme store - Design district Miami - Miami Art Basel',
            longdescription: 'A black and white movie, quite Dior men, filmed in New-York, which  set few personalities of the worldwide artistic scene, the Ukrainian ballet dancer Sergei Polunin, the English violinist Charlie Siem, the Californian pianist Mason Buccheri and the quite young violinist Claudius Agrippa. A movie, where you would understand, many influences are crossing each other,  those obvious of dance and classic music and those which are less obvious but which are directly linked to Bruce. A movie to discover on Dior Mag.',
            price: '105950',
            direction: 'Direction',
            images: {
                url1: 'img/stores/dior1.jpg',
                url2: 'img/stores/dior2.jpg',
                url3: 'img/stores/dior3.jpg'
            }
        }, {

            id: 7,
            title: 'Casa Maserati',
            category: 'Luxe cars',
            description: 'A Delight for Milan Auto Enthusiasts',
            longdescription: 'Shopping for couture clothing can be truly enjoyed with a glass of bubbly and a personal stylist at your service. And now it is possible to get the same regal treatment when you go car shopping at Casa Maserati – an exclusive retail store and bar lounge.From picking up super cars for a test drive to indulging in a peg of exquisite whiskey, this one-of-a-kind store will combine your love for automobiles and high-end parties.',
            price: '164900',
            direction: 'Direction',
            images: {
                url1: 'img/stores/mas1.jpg',
                url2: 'img/stores/mas2.jpg',
                url3: 'img/stores/mas3.jpg'
            }
        }, {
            id: 8,
            title: 'Louis Vuitton L’Ecriture',
            category: 'clothes',
            description: 'We all know Louis Vuitton makes a great bag.',
            longdescription: 'We all know Louis Vuitton makes a great bag, but did you know the brand has a store dedicated entirely to its luxurious writing accoutrements?',
            direction: 'Louis Vuitton L’Ecriture, 6 place Saint-Germain des Prés, 75006 Paris',
            images: {
                url1: 'img/stores/vuitt1.jpg',
                url2: 'img/stores/vuitt2.jpg',
                url3: 'img/stores/vuitt3.jpg'
            }
        }, {
            id: 9,
            title: 'Chanel',
            category: 'Clothes',
            description: 'The recently refurbished avenue Montaigne boutique is devoted to the label’s extensive line of fashion accessories,',
            longdescription: 'The recently refurbished avenue Montaigne boutique is devoted to the label’s extensive line of fashion accessories, from iconic Chanel handbags and costume jewellery to an array of seasonal shoes and accessories.',
            price: '6900',
            direction: 'Chanel, 42 avenue Montaigne, 75008 Paris, +33 (0)1 4723 7412',
            images: {
                url1: 'img/stores/chanel1.jpg',
                url2: 'img/stores/chanel2.jpg',
                url3: 'img/stores/chanel3.jpg'
            }
        }, {
            id: 10,
            title: 'Cartier',
            category: 'jewelry',
            description: 'Established in Paris in 1847',
            longdescription: 'Established in Paris in 1847 and favoured by royalty around the world, Cartier is an essential stop on any luxury shopping trip. Browse the boutique en route to the Opéra de Paris, situated at the top of the boulevard.',
            price: '5999',
            direction: 'Cartier, 12 boulevard des Capucines,',
            images: {
                url1: 'img/stores/cartier1.jpg',
                url2: 'img/stores/cartier2.jpg',
                url3: 'img/stores/cartier3.jpg'
            }
        }, {
            id: 11,
            title: 'Givenchy',
            category: 'Clothes',
            description: 'Creative director Riccardo Tisci recently collaborated with architect Joseph Dirand',
            longdescription: 'Creative director Riccardo Tisci recently collaborated with architect Joseph Dirand to create a new flagship store. It is inspired by the boxes that were originally used by the brand’s founder, Hubert de Givenchy, and are still used to deliver the haute collection to clients today. Each room in the new store on avenue Montaigne is its own box, with felt walls, solid oak floors, gold mirroring and polished steel.',
            price: '105950',
            direction: 'Givenchy, 36 avenue Montaigne, 75008 Paris, +33 (0)1 4443 9990 ',
            images: {
                url1: 'img/stores/given1.jpg',
                url2: 'img/stores/given2.jpg',
                url3: 'img/stores/given3.jpg'
            }
        }

    ];

    return {

        all: function() {
            return stores;
        },
        get: function(storeId) {
            for (var i = 0; i < stores.length; i++) {
                if (stores[i].id === parseInt(storeId)) {
                    return stores[i];
                }
            }
            return null;
        }
    };
})

.factory('GetMarksFactory', function() {

    var marks= [];

    return {

        post: function(value) {
            marks = value;
        },
        get: function() {
            return marks;
        }
    };
});


