import Component from "../component/Price rules/Component";
import Data from "../component/Price rules/Data";

describe("Price rules checking  ", () => {
   beforeEach(() =>{
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false
       })
    });
   let priceRulesComponent = new Component();
   let priceRulesData = new Data();

   it("Price rules checking test", () => {
       cy.visit("https://demo.phppointofsale.com/index.php/home");
       priceRulesComponent.loginButton.click();
       cy.visit("");
       priceRulesComponent.searchPriceRulesField.type(priceRulesData.searchPriceRulesField + "{enter}");
       priceRulesComponent.priceRulesText.contains("There are no price rules");
       priceRulesComponent.exitSearchButton.click();
       priceRulesComponent.totalPriceRulesText.contains("4");
   });
});
