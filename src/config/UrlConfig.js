/**
 * Created by Namita Malik on 13/3/15.
 */
(function (ng) {
    var bookApp = ng.module("bookApp");
    bookApp.factory("UrlConfig", function () {
        return {
            bookResult: "books/searchbook.json"
        }
    });
})(angular);