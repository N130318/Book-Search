/**
 * Created by Namita Malik on 02/04/15.
 */
(function (ng) {
    var bookApp = ng.module('bookApp', []);
    bookApp.controller('BookCtrl', ["$scope", "BookService", function ($scope, BookService) {
        BookService.getBookResults()
            .success(function (response) {
                $scope.book = response.books;
                angular.forEach($scope.book,function(value,index){
                    if($scope.book[index].librarysupported && $scope.book[index].librarysupported === 1){
                        $scope.book[index].librarysupported = "Yes";
                    }
                    else if($scope.book[index].librarysupported === 0){
                        $scope.book[index].librarysupported = "No"
                    }
                    else{
                        $scope.book[index].librarysupported = "NA";
                    }
                });
                console.log($scope.book[0].authors.firstname);
            })
            .error(function (status) {
                console.log(status);
            });
        $scope.reverse = false;
        $scope.sortBy = function (field) {
            if ($scope.orderByField == field) {
                $scope.reverse = !$scope.reverse;
            }
            $scope.orderByField = field;
        };

    }]);
})(angular);