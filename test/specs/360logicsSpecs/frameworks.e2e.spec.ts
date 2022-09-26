import frameworks_page from "../../pageobjects/360logicaPages/frameworks_page"

describe('Framworks test suite',async function () {
    
    it('Verify Framework',async function () {
        await frameworks_page.open()
        await browser.maximizeWindow()
        await frameworks_page.VerifyFramework()
    })

    it('Verify Unite test',async function () {
        await frameworks_page.VerifyUnite()
    })
    it('Verify STAQK test',async function () {
        await frameworks_page.VerifyStaqk()
    })
    it('Verify SAQAMA test',async function () {
        await frameworks_page.VerifySaqama()
    })
})