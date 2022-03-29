/// <reference types="cypress" />

const landingUiFix = require('../../fixtures/landing-ui.json')
//navigation fixtures
const mainNavFix = require('../../fixtures/main-page-nav.json')
const contriNavFix = require('../../fixtures/contri-nav.json')

describe('wiki test', () => {
    beforeEach(() => {
      //load page for each test
      cy.visit(Cypress.env('baseUrl'))
    })

    it('display logo',() => {
        cy.get('.mw-wiki-logo').should('be.visible')
    })

    it('displays correct title', () => {
        cy.title().should('include', landingUiFix.title )
    })

    it('display top navigation component',()=> {
        //verify top navigation is visible
        cy.get('#p-personal').should('have.length',1)
    })


    it('display main page navigation component', () => {
        //verify left navigation is visible
        cy.get('#p-navigation').should('be.visible')
    })

    mainNavFix.forEach((mainNav) => {
      it(`main navigation has link to ${mainNav}`, () => {
        cy.get('#p-navigation').contains(mainNav)
      })
    })

    it('display contribute navigation component', () => {
      cy.get('#p-interaction').should('be.visible')
    })

    contriNavFix.forEach((contriNav) => {
      it(`main navigation has link to ${contriNav}`, () => {
        cy.get('#p-interaction').contains(contriNav)
      })
    })

    it('display tool navigation component', () => {
      //verify left navigation is visible
      cy.get('#p-tb').should('be.visible')
    })

    it ('will fail to showcase error in report', () => {
      cy.get('#nothing-will-come').should('be.visible')
    })

})