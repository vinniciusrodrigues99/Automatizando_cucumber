describe('Usuário loga com sucesso', () => {
    it('Acessando o ambiente de homologação', () => {
      cy.visit('http://kmdobrasil.homelinux.com:49013/login');
      
      cy.get('[formcontrolname="email"]').type('admin@admin.com');
      cy.get('[formcontrolname="senha"]').type('Senha123@');
      cy.contains('button', 'Entrar').click();
    })
  })