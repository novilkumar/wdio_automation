import shadowdomPage from "../../pageobjects/herokuappPages/shadowdom-page"

describe('ShadowDom Testsuite', async function () {

    it('Verify Heading & First text',async function () {
        
        await shadowdomPage.open()
        shadowdomPage.VerifyHeading();
        shadowdomPage.VerifyFirstText()
        shadowdomPage.VerifyFirstText1();
    })
    
    it('Verify Secondtext', async function () {
        shadowdomPage.VerifySecondText();
    })

    it('Verify Deep Secondtext', async function () {
        shadowdomPage.VerifyDeepText();
    })
})