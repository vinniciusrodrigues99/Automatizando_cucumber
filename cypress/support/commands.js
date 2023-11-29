// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    username = username || "admin@admin.com";
    password =  password ||"Senha123@";

      cy.visit('http://kmdobrasil.homelinux.com:49013/login');
      
      cy.get('[formcontrolname="email"]').type(`${username}`);
      cy.get('[formcontrolname="senha"]').type(`${password}`);
      cy.contains('button', 'Entrar').click();
    })
Cypress.Commands.add('dado', () => 
{
  context("E deseja fazer uma busca filtrando pelos Equipamentos", () => 
  {
    cy.get(".menu-header__abas").click({ force:true });
    cy.contains("span", "Dashboard").click();
    cy.contains("span", "Serviços").click();
    cy.contains("span", "Equipamentos").click().should('be.visible');
  })
});
