describe('Si', () => {
  it('Visit website', () => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Goto Sing in screen and fill the email address for signup process ', () => {
    cy.wait(3000)
   
    cy.xpath('//a[@class="login"]').click()
    cy.xpath('//input[@id="email_create"]').type('aamediavfx@gmail.com')
    cy.xpath('//button[@id="SubmitCreate"]').click()
    cy.wait(3000)
    cy.xpath('//input[@id="id_gender2"]').click()
    cy.xpath('//input[@id="customer_firstname"]').type('Dummy')
    cy.xpath('//input[@id="customer_lastname"]').type('Name')
    cy.xpath('//input[@id="passwd"]').type('microsoft')
    cy.get('#days').select('14')
    cy.get('#months').select('10')
    cy.get('#years').select('1987')
    cy.xpath('//input[@id="company"]').type('dummy company')
    cy.xpath('//input[@id="address1"]').type('Isalambad, house 33')
    cy.xpath('//input[@id="city"]').type('Islamabad')
    cy.get('#id_state').select('9')
    cy.xpath('//input[@id="postcode"]').type('54000')
    cy.get('#id_country').select('21')
    cy.xpath('//input[@id="phone_mobile"]').type('+925652652')
    cy.xpath('//button[@id="submitAccount"]').click()







  })
})