import contact_page from "../../pageobjects/360logicaPages/contact_page"

describe('Contact test suite',async function () {
    
    it('Verify contact', async function () {
        await contact_page.open()
        browser.maximizeWindow()
    })

    it('Require information entered',async function () {
        await contact_page.FillInformation('Devil', "devil@360logica.com" , 7417189753, "www.360logica.com/", 'Devil is ready for automation')
        await browser.pause(10000)
    })

})