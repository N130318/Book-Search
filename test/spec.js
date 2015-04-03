var expectBooks = function(expectedNames, key) {
    element.all(by.repeater(key + ' in book').column(key + '.title')).then(function(arr) {
        arr.forEach(function(wd, i) {
            expect(wd.getText()).toMatch(expectedNames[i]);
        });
    });
};
describe('Book-Search', function() {
    it('should have a title', function() {
        browser.get('http://localhost:63342/Book-Search/books.html');
        expect(browser.getTitle()).toEqual('Search Books');
    });
    it('should search across all fields when filtering with a string', function() {
        browser.get('http://localhost:63342/Book-Search/books.html');
        var searchText = element(by.model('searchText'));
        searchText.clear();
        searchText.sendKeys('yes');
        expectBooks(['Lone Star Politics', 'The Contemporary American President', 'The Life Span: Human Development for Helping Professionals', 'RC DCTM 3-28nov: America: Past and Present, Combined Volume'],'b');
    });
});