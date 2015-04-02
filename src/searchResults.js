/**
 * Created by namita on 13/3/15.
 */
(function(ng){
    var bookApp = ng.module('bookApp', []);
    bookApp.controller('BookCtrl', ["$scope", "BookService", function ($scope, BookService) {
        BookService.getBookResults()
            .success(function (response) {
                $scope.book = response;
                console.log($scope.book.books[0]);
            })
            .error(function (status) {
                console.log(status);
            });
    }]);
})(angular);