/**
 * Created by Namita Malik on 02/04/15.
 */
(function (ng) {
    var bookApp = ng.module("bookApp");
    bookApp.factory("UrlConfig", function () {
        return {
            bookResult: "books/searchbook.json"
        }
    });
})(angular);