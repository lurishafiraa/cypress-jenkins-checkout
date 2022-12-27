/// <reference types="cypress" />

it('open web', () => {
     
    cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')

    cy.get('#34').click()
    
    //Register VIX
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div[2]/div[1]/div/div/div[2]/button').click({force: true})

    //Login
    cy.xpath('//*[@id="root"]/div[1]/div[1]/div/div/button[1]').click({force: true})
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[1]/div[2]/div/input').type('firafiro13@gmail.com')
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[2]/div[2]/div/input').type('firafiro13')
    cy.xpath('//*[@id="root"]/div[1]/div/div[2]/form/div[4]/button').click()

    //Register VIX
    cy.xpath('//*[@id="root"]/div[1]/div[3]/div[2]/div[1]/div/div/div[2]/button').click({force: true})

    //Application form
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div/div/input').type('luri shafira amalia')
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/div/input').type('081234567890')
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[3]/div/div/input').type('linkedin.com/in/luri-shafira')
    cy.get('#file-upload').attachFile('CV - Luri Shafira Amalia (QA).pdf')
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[5]/div[1]/div/img').check()
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[6]/div/div/img').check()
    cy.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/button').click()

    //Pop up
    cy.xpath('/html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/button[2]').click()

    //Checkout Payment
    cy.xpath('//*[@id="root"]/div[1]/div[2]/div/div[3]/div[3]/button').click()
    
})