describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", () => {
  it("Caso 3 - Execução 3: Usuário realiza pesquisa pelo campo 'Site'", () => {
    
    context("Dado que o usuário acessa a plataforma da KM", ()=> { cy.login(); })
    
    context("E deseja fazer uma busca filtrando pelo campo Site", () =>{
      cy.get(".menu-header__abas").click({force:true});
      cy.contains("span", "Dashboard").click();
      cy.contains("span", "Serviços").click();
      cy.contains("span", "Equipamentos").click().should('be.visible');
    });

    context("Quando ele clica na seção ativos e preenche o input de pesquisa com dados válidos", ()=>{
      let filtro = "UNIMED LIMEIRA - RUA BOA MORTE - APS" //site
      cy.get(".c-input-container__input", { matchCase: false }).type(filtro) //Ignorando a case sensitive
      context("Então a tabela me retorna os equipamentos esperados", () =>{
        cy.contains("button", "Buscar").click().then(() => {
          cy.get("table").contains("tr");
          cy.get("td").eq(1).should('have.text', filtro)
        });
      });
    });
  });
});