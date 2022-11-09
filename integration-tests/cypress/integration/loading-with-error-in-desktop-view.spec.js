describe('App loaded with error and ', () => {
    beforeEach(() => {
        cy.openWithFetchError();
    });

    it('should handle server error and display header', () => {
        cy.get('#header').should('contain', 'BEST BOOK STORES !');
    });

    it('should handle server error and display error message', () => {
        cy.get('#main-error').should('contain', 'Something went wrong...');
    });    
});

