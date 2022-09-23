import toggleslidingbar_page from "../../pageobjects/360logicaPages/toggleslidingbar_page"

describe('Toggle Suite',async function () {
    
    it('Click on toggle button', async function () {
        
        await toggleslidingbar_page.open()
        browser.maximizeWindow()
        await toggleslidingbar_page.clickOnTogglebutton()
        await browser.pause(5000)
    })

    it('Required infor for toggles button',async function() {
        await toggleslidingbar_page.RequiredInfo('Devil', "devil@360logica.com" , 7417189753, "www.360logica.com/", 'Devil is ready for automation')
        await browser.pause(10000)
    })
        
})