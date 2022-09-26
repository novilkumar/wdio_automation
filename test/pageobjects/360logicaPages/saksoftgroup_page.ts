import Page from "./page";

class SaksoftGroupPage extends Page{

    private get saksofgrouptbutton() {return $('span=Saksoft Group')}
    private get acumasolutionsbutton() {return $('#menu-item-454')}
    private get dreamorbitbutton() {return $('#menu-item-455')}
    private get EDPbutton() {return $('#menu-item-456')}
    private get faichisolutionsbutton() {return $('#menu-item-457')}
    private get saksoftbutton() {return $('#menu-item-458')} 
    
    public open() {
        return super.open('')
    }

    public async VerifySakgroup(){
        await this.saksofgrouptbutton.waitForEnabled({timeout:5000})
        await (await this.saksofgrouptbutton).isDisplayed()
    }
    public async VerifyAcumaSolution(){
        await (await this.saksofgrouptbutton).click()
        await (await this.saksofgrouptbutton).moveTo()
        await (await this.acumasolutionsbutton).click()
        await browser.pause(3000)
        await (await this.acumasolutionsbutton).isClickable()
        await (await this.acumasolutionsbutton).isLoading()
        await (await this.acumasolutionsbutton).isDisplayed()
    }
    public async VerifyDreamorbit(){
        await (await this.saksofgrouptbutton).click()
        await (await this.saksofgrouptbutton).moveTo()
        await (await this.dreamorbitbutton).click()
        await browser.pause(3000)
    }
    public async VerifyEDP(){
        await (await this.saksofgrouptbutton).click()
        await (await this.saksofgrouptbutton).moveTo()
        await (await this.EDPbutton).click()
        await browser.pause(3000)
    }
    public async VerifyFaichi(){
        await (await this.saksofgrouptbutton).click()
        await (await this.saksofgrouptbutton).moveTo()
        await (await this.faichisolutionsbutton).click()
        await browser.pause(3000)
    }
    public async VerifySaksoft(){
        await (await this.saksofgrouptbutton).click()
        await (await this.saksofgrouptbutton).moveTo()
        await (await this.saksoftbutton).click()
        await browser.pause(3000)
    }
}
export default new SaksoftGroupPage();