describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", () => {
  it("Caso 3 - Execução 1:  Usuário realiza pesquisa por número de série", () => {
    
    context("Dado que o usuário acessa a plataforma da KM", () => cy.login());

    context("E deseja fazer uma busca filtrando pelos Equipamentos", () => {
      cy.get(".menu-header__abas").click({ force:true });
      cy.contains("span", "Dashboard").click();
      cy.contains("span", "Serviços").click();
      cy.contains("span", "Equipamentos").click().should('be.visible');
    });

    context("Quando ele clica na seção ativos e preenche o input com um valor referente a um número de série do equipamento", () => {
      let filtro = "LZN4804742" //site
      cy.get(".c-input-container__input", { matchCase: false }).type(filtro).should('be.visible') //Ignorando a case sensitive
      
      context("Então a tabela retorna os equipamentos esperados", ()=> {
        cy.contains("button", "Buscar").click().then(() => {
          cy.get("table").contains("tr");
          cy.get("td").eq(8).should('have.text', filtro);
        });
      });
    });      
  });
});
/*describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", 
() => {
    it("**Dado** que o usuário deseja fazer uma busca filtrando pelo número de série **Quando** ele preenche o campo de pesquisa com um número de série válido **Então** a tabela me retorna os Equipamentos esperados", 
    () => {
      cy.login();
      cy.get(".menu-header__abas").click({force:true});
      cy.contains("span", "Dashboard").click();
      cy.contains("span", "Serviços").click();
      cy.contains("span", "Equipamentos").click();
      // var campos = ["ECADORSO", "1209/23", ""]
      cy.get(".c-input-container__input", { matchCase: false }).type("LZN4804742"); //número de série
      cy.contains("button", "Buscar").click();
    });
});*/


  