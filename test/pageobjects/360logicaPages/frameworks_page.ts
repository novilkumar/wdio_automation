import Page from "./page";

class FrameworksPage extends Page{

    private get Frameworksbutton() {return $('span=Frameworks')}
    private get Unitebutton() {return $('#menu-item-289')}
    private get Staqkbutton() {return $('#menu-item-313')}
    private get Saqamabuttton() {return $('#menu-item-288')}

    public open(){
        return super.open('');
    }

    public async VerifyFramework(){
        await (await this.Frameworksbutton).waitForEnabled({timeout:5000})
        await (await this.Frameworksbutton).isDisplayed()
        browser.pause(2000)
    }
    public async VerifyUnite(){
        await (await this.Frameworksbutton).waitForEnabled({timeout:5000})
        await (await this.Frameworksbutton).moveTo()
        await (await this.Unitebutton).click()
        browser.pause(2000)
    }
    public async VerifyStaqk(){
        await (await this.Frameworksbutton).waitForEnabled({timeout:5000})
        await (await this.Frameworksbutton).moveTo()
        await (await this.Staqkbutton).click()
        browser.pause(2000)
    }
    public async VerifySaqama(){
        await (await this.Frameworksbutton).waitForEnabled({timeout:5000})
        await (await this.Frameworksbutton).moveTo()
        await (await this.Saqamabuttton).click()
        browser.pause(2000)
    }
}

export default new FrameworksPage();