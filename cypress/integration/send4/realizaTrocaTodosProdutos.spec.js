/// <reference types="Cypress" />

import LOC from '../../support/locators/locatorsSend4'

describe('Send4 - Realiza a troca de TODOS os produtos', function () {
    
    before('Acessa a home page', function() {
        cy.comecar_send4();
    });

    it('Seleciona o tipo da loja', function () {
        cy.seleciona_tipo_loja(LOC.SELECT_SOURCE.OPTION_ECOMMERCE)
    });

    it('Informa o numero de pedido e e-mail', function () {
        cy.informaPedido();
    });

    it('Seleciona a troca de TODOS os produtos, informa a Quantidade de produtos, Ação, Motivos e Detalhes', function () {
        cy.trocarProduto('TrocarTodosProdutos');
    });

    it('Seleciona o metodo de devolução', function() {
        cy.selecionaMetodoDevolucao('correios');
    });

    it('Verifica os produtos e confirma troca', function() {
        cy.validaDadosDaTroca();
    });

    it('Informa a avaliação de experiência do usuário', function() {
        cy.informaAvaliacao('10');
    });

});