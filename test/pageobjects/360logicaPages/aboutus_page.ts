import Page from "./page";

class AboutPage extends Page{

    private get Aboutusbutton() {return $('span=About Us')}
    private get managementbutton() {return $('#menu-item-245')}
    private get investorsbutton() {return $('#menu-item-244')}
    private get careersbutton() {return $('#menu-item-243')}

    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    public open() {
        return super.open('')
    }

    public async VerifyAboutUS(){
        await (await this.Aboutusbutton).waitForDisplayed({timeout:5000})
        await (await this.Aboutusbutton).isDisplayed()
    }

    public async VerifyManagement(){
        await (await this.Aboutusbutton).moveTo()
        await (await this.managementbutton).click()
        await (await this.Aboutusbutton).isDisplayed()
        browser.pause(3000)
    }
    public async VerifyInvertors(){
        await (await this.Aboutusbutton).moveTo()
        await (await this.investorsbutton).click()
        await (await this.Aboutusbutton).isDisplayed()
        browser.pause(3000)
    }
    public async VerifyCareers(){
        await (await this.Aboutusbutton).moveTo()
        await (await this.careersbutton).click()
        await (await this.Aboutusbutton).isDisplayed()
        browser.pause(3000)
    }
}
export default new AboutPage();