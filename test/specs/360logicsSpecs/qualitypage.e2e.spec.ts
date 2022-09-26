import qualityassurance_page from "../../pageobjects/360logicaPages/qualityassurance_page"

describe ('Solutions Page testsuite',async function () {
    
    it('Open Quality Assurance page',async function () {
        await qualityassurance_page.open()
        await browser.maximizeWindow()
        await qualityassurance_page.ClickSolutions()
        await browser.pause(2000)    
    })

    it('Open Test Automation Page',async function () {
        await qualityassurance_page.VerifyTestautomation()
        await browser.pause(3000) 
    })
    
    it('Open Performance Testing Page',async function () {
        await qualityassurance_page.VerifyPerformanceTesting()
        await browser.pause(3000) 
    })
    
    it('Open Cyber Security Page',async function () {
        await qualityassurance_page.VerifyCyberSecurity()
        await browser.pause(3000) 
    })
    
    it('Open Digital Transformation Page',async function () {
        await qualityassurance_page.VerifyDigitalTransformation()
        await browser.pause(3000) 
    })
})