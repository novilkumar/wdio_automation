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
        await browser.pause(5000)
    })

    it('Message successfully', async function() {
        await toggleslidingbar_page.VerifySendMessage()
    })
   /* it('Message Unsuccessfully', async function() {
        await toggleslidingbar_page.VerifySendMessage("THERE WAS AN ERROR TRYING TO SEND YOUR MESSAGE. PLEASE TRY AGAIN LATER.")
    })*/
        
})