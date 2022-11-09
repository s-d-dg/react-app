describe('App loaded data properly with mobile set components and ', () => {
    beforeEach(() => {
        cy.viewport(360, 740);
        cy.openWithSuccessfullFetch();
    });

    it('should display header', () => {
        cy.get('#header').should('contain', 'BEST BOOK STORES !');
    });

    it('should display four cards with book stores data', () => {
        cy.get('[data-id=card]').should('have.length', 4);
    });
    
    describe('should display properly all data in the card like ', () => {
        it('card title', () => {
            cy.get('[data-id=card]').eq(0).get('[data-id=mobile-card-title]').should('contain', 'MicroBooks');
        });

        it('table title', () => {
            cy.get('[data-id=card]').eq(0).get('[data-id=best-sellers-title]').should('contain', 'Best-selling books');
        });

        it('values in first row in the table', () => {
            cy.get('[data-id=card]').eq(0).get('[data-id=book-details]').eq(0).should('contain', 'JavaScript: The Good Parts');
            cy.get('[data-id=card]').eq(0).find('[data-id=book-details]').eq(0).should('contain', 'Douglas Crockford');
        });

        it('values in second row in the table', () => {
            cy.get('[data-id=card]').eq(0).get('[data-id=book-details]').eq(1).should('contain', 'JavaScript: The Definitive Guide');
            cy.get('[data-id=card]').eq(0).find('[data-id=book-details]').eq(1).should('contain', 'David Flanagan');
        });

        
        it('establishment date and url', () => {
            cy.get('[data-id=card]').eq(0).get('[data-id=mobile-card-footer]').should('contain', '09.02.1995');
            cy.get('[data-id=card]').eq(0).get('[data-id=mobile-card-footer]').should('contain', 'https://www.micro-books-store.com');
        });

    });
});

