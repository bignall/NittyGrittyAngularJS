(function() {
    var app = angular.module('ranch', []);
    
    app.controller('RanchController', ['$http', function($http){
        var ranch = this;
        
        $http.get('animals.json').success(function(data) {
            ranch.animals = data;
        });
    }]);
    
    app.directive('animalDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'animal.html'
        };
    });
    
})();

