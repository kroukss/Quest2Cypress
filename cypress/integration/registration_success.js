/// <reference types="cypress" />

describe('Registration success', () => {
    let rndname = Math.floor(Math.random() * 10000);
    
    it('Filling right form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.contains('C\'est OK pour moi').click();
        cy.get('#firstName').type(`toto`);
        cy.get('#lastName').type('titi');
        cy.get('#signup-email').type(`tititoto${rndname}@yopmail.com`);
        cy.get('#signup-password').type('Azerty12345');
        cy.get('[data-qa=signup-submit-button]').click();
    });
    it('Visit account', () => {
        cy.contains('C\'est OK pour moi').click();
        cy.visit('https://preprod.backmarket.fr/dashboard/profile');        
        cy.url().should('equal', 'https://preprod.backmarket.fr/dashboard/profile');
        cy.contains('C\'est OK pour moi').click();
        cy.contains(`tititoto${rndname}@yopmail.com`).should("exist");
    });
    
})