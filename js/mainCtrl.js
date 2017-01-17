angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService) {
        $scope.quotes = mainService.quotes;
        $scope.addQuotes = mainService.addQuotes;
        $scope.removeQuotes = mainService.removeQuotes;



    })
