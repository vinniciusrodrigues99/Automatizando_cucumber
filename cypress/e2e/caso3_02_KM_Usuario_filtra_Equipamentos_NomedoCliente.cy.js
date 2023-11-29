describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", () => {
  it("Caso 3 - Execução 2:  Usuário realiza pesquisa por nome do cliente", () => {
    
    context("Dado que o usuário acessa a plataforma da KM", () => cy.login());

    context("E deseja fazer uma busca filtrando pelos Equipamentos", () => {
      cy.get(".menu-header__abas").click();
      cy.contains("span", "Dashboard").click();
      cy.contains("span", "Serviços").click();
      cy.contains("span", "Equipamentos").click().should('be.visible');
    });

    context("Quando ele clica na seção ativos E preenche o input com o nome de um cliente válido", () => {
      let filtro = "IMPERIO-RA" //site
      cy.get(".c-input-container__input", { matchCase: false }).type(filtro).should('be.visible') //Ignorando a case sensitive
      
      context("Então a tabela retorna os equipamentos esperados", ()=> {
        cy.contains("button", "Buscar").click().then(() => {
          cy.get("table").contains("tr");
          cy.get("td").eq(0).should('have.text', filtro);
        });
      });
    });      
  });
});


/* describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", 
() => {
  it("**Dado** que o usuário deseja fazer uma busca filtrando por algum campo específico da tabela **Quando** ele preenche o campo de pesquisa com o nome de um cliente válido **Então** a tabela me retorna os Equipamentos esperados", () => {
    cy.login();
    cy.get(".menu-header__abas").click({force:true});
    cy.contains("span", "Dashboard").click();
    cy.contains("span", "Serviços").click();
    cy.contains("span", "Equipamentos").click();
    var filtro = "IMPERIO-RA"; //cliente
    cy.get(".c-input-container__input", { matchCase: false }).type(filtro);
    cy.contains("button", "Buscar").click().then(() =>
    {
      cy.get("table").contains("tr");
      cy.get("td").eq(0).should('have.text', filtro);
    })
  });
}); */ 
