import aboutus_page from "../../pageobjects/360logicaPages/aboutus_page"

describe('AbousUS test suite',async function () {
    
    it('About us page Verify',async function () {
        await aboutus_page.open()
        browser.maximizeWindow()
    })
    it('Management page Verify',async function () {
        await aboutus_page.VerifyManagement()
    })
    it('Investors page Verify',async function () {
        await aboutus_page.VerifyInvertors()
    })
    it('Careers page Verify',async function () {
        await aboutus_page.VerifyCareers()
    })
})