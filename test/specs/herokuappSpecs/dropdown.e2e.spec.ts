import dropdwonPage from "../../pageobjects/herokuappPages/dropdwon-page"

describe("Dropdown list suite",async function() {
  
    it("Dropdown testcase",async function() {
        await browser.setTimeout({pageLoad:5000, implicit:5000})
        await dropdwonPage.open()
        await dropdwonPage.DropDown()
        const option = await $("#dropdown")
        await option.selectByAttribute('value','2')
        await browser.pause(4000)
        await option.getValue();
    })
})