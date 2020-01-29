import LOC from './locators/locatorsSend4'
let clientName = "Tester Send4";
let orderNumber = "318";
let email = "tester@send4.com.br";
let phoneNumber = "(41) 99999-9999";
let document = "156.358.460-33";
let address = "Rua João Dembinski";
let quantities = "1";
let exchangeAction = "Trocar";
let reasonChange = "Defeito de troca";
let exchangeDescription = "Textarea - Automação Send4 Cypress";
let productOne = "Camiseta Send4Lovers";
let productTwo = "Produto Teste 4";
let cep = "81240-270";
let number = "3246";
let complements = "casa";

Cypress.Commands.add('comecar_send4', () => {
    cy.visit(Cypress.env('host'), { timeout: 60000 })
    cy.get(LOC.LOGOS_SEND4.LOGO).should('have.attr', 'src').should('include', 'send4-logo-white-big.png')
    cy.get('h1').should('have.text','Bem-vindo ao Send4').and('exist', { timeout: 60000 })
    cy.get(LOC.HOME_PAGE.BTN_START).should('exist').click()
})

Cypress.Commands.add('seleciona_tipo_loja', (tipoLoja) => {
    cy.get('h1').should('have.text','Onde você comprou os seus produtos?').and('exist');
    cy.get(LOC.SELECT_SOURCE.OPTION_STORE).should('exist');
    cy.get(tipoLoja).should('exist').click();
})

Cypress.Commands.add('informaPedido', () =>{
    cy.get('h1').should('have.text','Qual é o seu número de pedido?').and('exist');
    cy.get(LOC.ORDER.INPUT_ORDER_NUMBER).should('exist').type(orderNumber);
    cy.get(LOC.ORDER.INPUT_EMAIL).should('exist').type(email);
    cy.get(LOC.ORDER.BTN_CONTINUE).should('exist').click();
})

Cypress.Commands.add('trocarProduto', (qtdProdutosTrocar) =>{
    if(qtdProdutosTrocar == 'TrocarUmProduto'){
        cy.log('TrocarUmProduto');
        cy.get('h1').should('have.text','Quais produtos você quer trocar?').and('exist');
        cy.contains(productOne);
        cy.contains(productTwo);
        cy.get(LOC.PRODUCTS_ECOMMERCE.BTN_CONTINUE).should('be.disabled');
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ONE).eq(1).should('exist').and('not.be.checked');
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ONE).click();
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ONE).eq(1).should('exist').and('be.checked');
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(0).select(quantities).should('have.value', quantities);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(1).select(exchangeAction);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(2).select(reasonChange);
        cy.get(LOC.PRODUCTS_ECOMMERCE.BTN_CONTINUE).should('exist').and('be.enabled').click();
    }else if(qtdProdutosTrocar == 'TrocarTodosProdutos'){
        cy.log('TrocarTodosProdutos')
        cy.get('h1').should('have.text','Quais produtos você quer trocar?').and('exist');
        cy.contains(productOne);
        cy.contains(productTwo);
        cy.get(LOC.PRODUCTS_ECOMMERCE.BTN_CONTINUE).should('be.disabled');
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ECOMMERCE).should('exist').and('not.be.checked');
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ECOMMERCE).parent().click();
        cy.get(LOC.PRODUCTS_ECOMMERCE.CHECKBOX_PRODUCT_ECOMMERCE).should('exist').and('be.checked');
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(0).select(quantities).should('have.value', quantities);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(1).select(exchangeAction);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(2).select(reasonChange);
        cy.get(LOC.PRODUCTS_ECOMMERCE.TEXTAREA_DEFAULT).eq(0).type(exchangeDescription);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(4).select(exchangeAction);
        cy.get(LOC.PRODUCTS_ECOMMERCE.SELECT_DEFAULT).eq(5).select(reasonChange);
        cy.get(LOC.PRODUCTS_ECOMMERCE.TEXTAREA_DEFAULT).eq(1).type(exchangeDescription);
        cy.get(LOC.PRODUCTS_ECOMMERCE.BTN_CONTINUE).should('exist').and('be.enabled').click();
    }else{
        throw new Error("Não informou quantos produtos deseja trocar!!!")
    }

})

Cypress.Commands.add('alteraEndereco', () =>{
    cy.get(LOC.SHIPPING.BTN_CHANGE_ADDRESS).eq(1).should('exist').click();
    cy.wait(2000);
    cy.get(LOC.SHIPPING_MODAL_CHANGE_ADDRESS.INPUT_CEP).should('exist').type(cep);
    cy.get(LOC.SHIPPING_MODAL_CHANGE_ADDRESS.INPUT_NUMBER).should('exist').type(number);
    cy.get(LOC.SHIPPING_MODAL_CHANGE_ADDRESS.INPUT_COMPLEMENT).should('exist').type(complements);
    cy.get(LOC.SHIPPING_MODAL_CHANGE_ADDRESS.BTN_SAVE).should('exist').click();
})

Cypress.Commands.add('selecionaMetodoDevolucao', (metodo) =>{
    if(metodo == 'correios'){
        cy.log('Metodo Correios');
        cy.get('h1').should('have.text','Selecione o método de devolução').and('exist');
        cy.contains('Outros métodos');
        cy.contains('Agência do Correios');
        cy.get(LOC.SHIPPING.BTN_MAIL_AGENCY).click();
        cy.get(LOC.SHIPPING.BTN_CONTINUE).click()
    }else if(metodo == 'outros'){

    }else{
        throw new Error("Não informou metodo para devolucao!!!")
    }
})

Cypress.Commands.add('validaDadosDaTroca', () => {
    cy.get('h1').should('have.text','Quase lá!').and('exist');
    cy.contains(clientName);
    cy.contains(email);
    cy.contains(address);
    cy.contains(phoneNumber);
    cy.contains(document);
    cy.contains(productOne);
    cy.contains(productTwo);
    cy.contains(exchangeAction);
    cy.contains(reasonChange);
    cy.contains(exchangeDescription);
    cy.get(LOC.RESUME.CHECKBOX_POLICY).should('be.checked');
    cy.get(LOC.RESUME.BTN_CONTINUE).should('exist').click();
})

Cypress.Commands.add('informaAvaliacao', (avaliacao) => {
    if(avaliacao == '0'){
        cy.get('h1').should('have.text','Sua solicitação foi realizada com sucesso!O que você achou até agora?').and('exist');
        cy.get(LOC.FINISH.BTN_STAR0).should('exist').click();
        cy.contains('Parece que sua experiência não foi boa :(');
        cy.get(LOC.FINISH.BTN_SEND).should('be.disabled');
        cy.get(LOC.FINISH.TEXTAREA_COMMENT).type(exchangeDescription);
        cy.get(LOC.FINISH.BTN_SEND).should('be.enabled').click();
        cy.get(LOC.HOME_PAGE.TOAST_SUCESS).should('exist', 'Avaliação realizada com sucesso');
    }else if(avaliacao == '10'){
        cy.get('h1').should('have.text','Sua solicitação foi realizada com sucesso!O que você achou até agora?').and('exist');
        cy.get(LOC.FINISH.BTN_STAR10).should('exist').click();
        cy.get(LOC.FINISH.TEXTAREA_COMMENT).type(exchangeDescription);
        cy.get(LOC.FINISH.BTN_SEND).should('be.enabled').click();
        cy.get(LOC.HOME_PAGE.TOAST_SUCESS).should('exist', 'Avaliação realizada com sucesso');
    }else{
        throw new Error("Não informou a nota de avaliação!!!")
    }
})