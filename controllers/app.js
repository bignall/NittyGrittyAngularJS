(function() {
    var app = angular.module('ranch', []);
    
    app.controller('RanchController', function(){
        this.animal = animal;
    });
    
    var animal = {
        name: 'Gypsy', 
        species: 'Horse', 
        gender: 'Female', 
        age: '8 years',
        img: '/img/gypsy/IMG_20140730_153707.jpg', 
    };
    
})();

