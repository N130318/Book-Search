/**
 * Created by namita on 13/3/15.
 */
(function (ng) {
    var bookApp = ng.module('bookApp');
    bookApp.service("BookService", ["$http", "UrlConfig", function ($http, UrlConfig) {
        this.getBookResults = function () {
            return $http.get(UrlConfig.bookResult);
        };
    }]);
})(angular);