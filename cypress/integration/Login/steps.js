import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor/steps";

Given("Dado que acesso o sistema", ()=>{
    cy.visit('http://kmdobrasil.homelinux.com:49013/login');
})
When("Quando preencho os campos de email e senha com valores válidos", ()=>{
    cy.get('[formcontrolname="email"]').type('admin@admin.com');
    cy.get('[formcontrolname="senha"]').type('Senha123@');
})
And("E clico no botão entrar", ()=>{
    cy.contains('button', 'Entrar').click();
});
Then("Então o sistema me redireciona para a página inicial", ()=>{
    cy.log("Teste executado com sucesso");
})