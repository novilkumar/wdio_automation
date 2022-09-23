import Page from "./page";

class AlertPage extends Page{

    private get heading() {return $('h3=JavaScript Alerts')}
    private get jsalertbutton() {return $('button=Click for JS Alert')}
    private get jsconfirmbutton() {return $('button=Click for JS Confirm')}
    private get jspromtbutton() {return $('button=Click for JS Prompt')}
    private get result() {return $('#result')}

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    
    public open(){
        return super.open("/javascript_alerts");
    }

    public async VerifyHeading(){
        await this.heading.waitForDisplayed({timeout:4000})
        expect((await this.heading).isDisplayed).toBe(true);
    }

    public async JsAlert(){
        await this.jsalertbutton.waitForEnabled({timeout:6000})
        await (await this.jsalertbutton).click()
    }

    public async JsConfirm(){
        await this.jsconfirmbutton.waitForEnabled({timeout:5000})
        await (await this.jsconfirmbutton).click()
    }

    public async JsPrompt(){
        await this.jspromtbutton.waitForEnabled({timeout:5000})
        await this.jspromtbutton.click()
        // browser.sendAlertText('Devil is here')
        // browser.pause(5000)
    }

    public async VerifyResult(message: String){
        expect(await this.result.getText()).toEqual(message)
    }
}

export default new AlertPage();