import alertPage from "../../pageobjects/herokuappPages/alert-page"

describe("Alert page Script",async function() {
    
    it("Js Alert",async function() {
      await browser.setTimeout({pageLoad:5000, implicit:5000})
      await alertPage.open()
      alertPage.VerifyHeading()
      await alertPage.JsAlert()
      await browser.pause(4000)
      await browser.acceptAlert()
      await browser.pause(5000)
      await alertPage.VerifyResult("You successfully clicked an alert")
    })

    it("Js Confirm-OK",async function() {
      await browser.setTimeout({pageLoad:5000, implicit:5000})
      await alertPage.open()
      alertPage.VerifyHeading()
      await alertPage.JsConfirm()
      await browser.pause(4000)
      await browser.acceptAlert()
      await browser.pause(5000)
      await alertPage.VerifyResult("You clicked: Ok")
    })

    it("Js Confirm-Cancel",async function() {
      await browser.setTimeout({pageLoad:5000, implicit:5000})
      await alertPage.open()
      alertPage.VerifyHeading()
      await alertPage.JsConfirm()
      await browser.pause(4000)
      await browser.dismissAlert()
      await browser.pause(5000)
      await alertPage.VerifyResult("You clicked: Cancel")
    })

    it("Js Prompt",async function() {
      //await browser.setTimeout({pageLoad:5000, implicit:5000})
      await alertPage.open()
      await alertPage.JsPrompt()
      browser.sendAlertText('Devil is here')
      await browser.pause(3000)
      browser.acceptAlert()
      await browser.pause(3000)
      alertPage.VerifyResult("You entered: Devil is here")
    })
})