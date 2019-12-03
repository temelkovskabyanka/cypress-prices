export default class Component{
    get loginButton(){
    return cy.get(".btn.btn-primary.btn-block");
    };
   get  searchPriceRulesField(){
        return cy.get("#search");
    }
    get priceRulesText(){
       return cy.get(".col-md-12.text-center.text-warning");
    }
    get exitSearchButton(){
       return cy.get(".ion.ion-close-circled");
    }
    get totalPriceRulesText(){
       return cy.get("#manage_total_items");
    }
}