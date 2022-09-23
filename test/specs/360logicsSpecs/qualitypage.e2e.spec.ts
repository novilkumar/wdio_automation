import qualityassurance_page from "../../pageobjects/360logicaPages/qualityassurance_page"

describe ('Quality Page testsuite',async function () {
    
    it('Open Quality page',async function () {
        await qualityassurance_page.open()
        await browser.maximizeWindow()
        await qualityassurance_page.ClickSolutions()
        await browser.pause(5000)    
    })
})