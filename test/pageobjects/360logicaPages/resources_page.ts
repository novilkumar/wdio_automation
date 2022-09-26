import Page from "./page";

class ResourcePage extends Page{

    private get Resourcebutton() {return $('span=Resources')}
    private get Blogbutton() {return $('')}
    private get Casestudiesbutton() {return $('')}

    public open(){
        return super.open('')
    }

    public async VerifyResourcebutton(){
        await (await this.Resourcebutton).waitForEnabled({timeout:5000})
        await (await this.Resourcebutton).isDisplayed()
        browser.pause(3000)
    }
    public async Verifyblogbutton(){
        await (await this.Resourcebutton).waitForEnabled({timeout:5000})
        ;(await this.Resourcebutton).moveTo()
        await (await this.Blogbutton).click()
        browser.pause(3000)
    }
    public async VerifyCaseStudiesbutton(){
        await (await this.Resourcebutton).waitForEnabled({timeout:5000})
        await (await this.Resourcebutton).moveTo()
        await (await this.Casestudiesbutton).click()
        browser.pause(3000)
    }
}
export default new ResourcePage();