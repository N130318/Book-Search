describe('Book-Search', function() {
    it('should have a title', function() {
        browser.get('http://localhost:63342/Book-Search/books.html');
        expect(browser.getTitle()).toEqual('Search Books');
    });
});