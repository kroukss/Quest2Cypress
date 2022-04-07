/// <reference types="cypress" />

describe('Authentification failed', () => {

    it('Filling wrong form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.get('[data-qa=accept-cta]').click();
        cy.get('#signin-email').type(`tititoto@yopmail.com`);
        cy.get('#signin-password').type('Azerty123');
        cy.get('[data-qa=signin-submit-button]').click();
        cy.contains('Informations d\'identification erronées').should("exist");;
    })  
})