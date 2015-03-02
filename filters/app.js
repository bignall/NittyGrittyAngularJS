(function() {
    var app = angular.module('ranch', []);
    
    app.controller('RanchController', function(){
        this.animals = animals;
    });
    
    var animals = [
        {
            name: 'Gypsy', 
            species: 'Horse', 
            gender: 'Female', 
            age: '8 years',
            img: '/img/gypsy/IMG_20140730_153707.jpg', 
        },
        {"name": "Bella", "img": "/img/bella/IMG_20140730_153701.jpg", 
         "species": "Horse", "gender": "Female", "age": "17 years"},
        {"name": "Zaakir", "img": "/img/zaakir/IMG_20140730_153424.jpg", 
         "species": "Dog", "gender": "Male", "altered": true, "age": "3 years",
         "notes": "Service Dog"},
        {"name": "Chicken #1", "img": "/img/chicken01/IMG_20140730_155138.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #2", "img": "/img/chicken02/IMG_20140730_161839.jpg", 
         "species": "Chicken", "gender": "Male", "age": "4 months"},
        {"name": "Chicken #3", "img": "/img/chicken03/IMG_20140730_155134.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #4", "img": "/img/chicken04/IMG_20140730_154727.jpg", 
         "species": "Chicken", "gender": "Male", "age": "4 months"},
        {"name": "Chicken #5", "img": "/img/chicken05/IMG_20140730_155207.jpg", 
         "species": "Chicken", "gender": "Male", "age": "4 months"},
        {"name": "Chicken #6", "img": "/img/chicken06/IMG_20140730_155145.jpg", 
         "species": "Chicken", "gender": "Male", "age": "14 months"},
        {"name": "Chicken #7", "img": "/img/chicken07/IMG_20140730_154758.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #8", "img": "/img/chicken08/IMG_20140730_154846.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #9", "img": "/img/chicken09/IMG_20140730_155008.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #10", "img": "/img/Chicken10/IMG_20140730_154727.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #11", "img": "/img/chicken11/IMG_20140730_154749.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #12", "img": "/img/chicken12/IMG_20140730_154743.jpg", 
         "species": "Chicken", "gender": "Female", "age": "24 months"},
        {"name": "Chicken #13", "img": "/img/chicken13/IMG_20140730_154727.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"},
        {"name": "Chicken #14", "img": "/img/chicken14/IMG_20140730_154316.jpg", 
         "species": "Chicken", "gender": "Female", "age": "4 months"}
    ];   
})();

