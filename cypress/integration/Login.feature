Feature: Login

Scenario: Usuário faz login com credenciais válidas
    Given que o usuário deseja realizar o login na plataforma
    When ele preenche os campos de email e senha com as credenciais corretas
    Then o sistema exibe a mensagem "login realizado com sucesso"

