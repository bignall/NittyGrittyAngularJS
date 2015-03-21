(function() {
    var app = angular.module('ranch', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/animals', {
                templateUrl: 'animals.html',
                controller: 'AnimalsController'
            })
            .when('/equipment', {
                templateUrl: 'equipment.html',
                controller: 'EquipmentController'
            })
            .when('/tasks', {
                templateUrl: 'tasks.html',
                controller: 'TasksController'
            })
            .otherwise({
                redirectTo: '/animals'
            });
    }]);
    
    app.controller('RanchController', ['$http', function($http){
        var ranch = this;
        
        $http.get('animals.json').success(function(data) {
            ranch.animals = data;
        });
    }]);

    app.controller('AnimalsController', function() {
    });

    app.controller('EquipmentController', function() {
    });

    app.controller('TasksController', function() {
    });
    
    app.directive('animalDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'animal.html'
        };
    });
    
})();

