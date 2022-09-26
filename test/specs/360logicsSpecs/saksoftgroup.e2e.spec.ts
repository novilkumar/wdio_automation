import saksoftgroup_page from "../../pageobjects/360logicaPages/saksoftgroup_page"

describe ('SaksoftGroup Page testsuite',async function () {
    
    it('Verify Saksoftgroup test',async function () {
        await saksoftgroup_page.open()
        await browser.maximizeWindow()
        await browser.pause(2000)    
    })
    it('Open Acuma Solution Page',async function () {
        await saksoftgroup_page.VerifyAcumaSolution()
        await browser.pause(3000) 
    })
    it('Open Dream Orbit Page',async function () {
        await saksoftgroup_page.VerifyDreamorbit()
        await browser.pause(3000) 
    })
    it('Open EDP Page',async function () {
        await saksoftgroup_page.VerifyEDP()
        await browser.pause(3000) 
    })
    it('Open Faichi Page',async function () {
        await saksoftgroup_page.VerifyFaichi()
        await browser.pause(3000) 
    })
    it('Open saksoft Page',async function () {
        await saksoftgroup_page.VerifySaksoft()
        await browser.pause(3000) 
    })
})