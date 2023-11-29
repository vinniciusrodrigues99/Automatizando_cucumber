describe("Usuário tenta realizar login com as credencias incorretas", () => {
  it("Acessando o ambiente de homologação", () => {
    cy.visit("http://kmdobrasil.homelinux.com:49013/login");
    cy.login("vinnicius.rodrigues1999@gmail.com", "Senha123@");
  });
});
