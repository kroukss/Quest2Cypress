/// <reference types="cypress" />

describe('Registration failed', () => {
    let rndname = Math.floor(Math.random() * 10000);

    it('Filling wrong form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('C\'est OK pour moi').click();
        cy.get('#firstName').type('toto');
        cy.get('#lastName').type('titi');
        cy.get('#signup-email').type(`tititoto${rndname}@yopmail.com`);
        cy.get('#signup-password').type('123456');
        cy.get('[data-qa=signup-submit-button]').click();
    });    
    it('Trying to visit the homepage account', () => {
        cy.visit('https://preprod.backmarket.fr/dashboard/profile');
        cy.url().should('not.equal', 'https://preprod.backmarket.fr/dashboard/profile');
    });
    
})