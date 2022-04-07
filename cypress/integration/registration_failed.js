/// <reference types="cypress" />

describe('Registration failed', () => {
    let rndname = Math.floor(Math.random() * 10000);

    it('Filling with wrong password', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.get('[data-qa=accept-cta]').click();
        cy.get('#firstName').type('toto');
        cy.get('#lastName').type('titi');
        cy.get('#signup-email').type(`tititoto${rndname}@yopmail.com`);
        cy.get('#signup-password').type('123456');
        cy.get('[data-qa=signup-submit-button]').click();
        cy.contains('Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre. Parce qu\'on sait jamais')
        .should("exist")  
    });
})