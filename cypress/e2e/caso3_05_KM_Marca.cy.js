describe("Usuário filtra os equipamentos pelos campos disponíveis na tabela dentro da seção Ativos", () => {
	it("Caso 3 - Execução 5:  Usuário realiza pesquisa por Marca", () => {
    
		context("Dado que o usuário acessa a plataforma da KM", () => cy.login());

		context("E deseja fazer uma busca filtrando pelos Equipamentos", () => {
			cy.get(".menu-header__abas").click({ force:true });
			cy.contains("span", "Dashboard").click();
			cy.contains("span", "Serviços").click();
			cy.contains("span", "Equipamentos").click().should('be.visible');
		});

		context("Quando ele clica na seção ativos e preenche o input com um valor referente a marca", () => {
      let filtro = "EPSON" //site
      cy.get(".c-input-container__input", { matchCase: false }).type(filtro).should('be.visible') //Ignorando a case sensitive
      
      context("Então a tabela retorna os equipamentos esperados", ()=> {
        cy.contains("button", "Buscar").click().then(() => {
          cy.get("table").contains("tr");
          cy.get("td").eq(6).should('have.text', filtro);
        });
      });
    });      
  });
});