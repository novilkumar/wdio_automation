import resources_page from "../../pageobjects/360logicaPages/resources_page"

describe('test Resources suite',async function () {
    
    it('Verify Resource test',async function () {
        await resources_page.open()
        browser.maximizeWindow()
        resources_page.VerifyResourcebutton()
    })
    it('Verify Blog test',async function () {
        resources_page.Verifyblogbutton()
    })
    it('Verify Case Studies test',async function () {
        resources_page.VerifyCaseStudiesbutton()
    })

})