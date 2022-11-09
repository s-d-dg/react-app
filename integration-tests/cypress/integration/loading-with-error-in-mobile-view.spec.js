describe('App loaded with error and ', () => {
    beforeEach(() => {
        cy.viewport(360, 740);
        cy.openWithFetchError();
    });

    it('should handle server error and display header', () => {
        cy.get('#header').should('contain', 'BEST BOOK STORES !');
    });

    it('should handle server error and display error message', () => {
        cy.get('#main-error').should('contain', 'Something went wrong...');
    });    
});

