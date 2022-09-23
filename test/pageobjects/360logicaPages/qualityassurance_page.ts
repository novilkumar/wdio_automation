import Page from "./page";

class QualityPage extends Page{
    
    private get Solutions() {return $('span=Solutions')}
    private get Qualityassurancebutton() {return $('#menu-item-163')}

   
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    public open(){
        return super.open('');
    }

    public async ClickSolutions(){
        await this.Solutions.waitForEnabled({timeout:5000})
        await (await this.Solutions).click()
        await (await this.Solutions).moveTo()
        await (await this.Qualityassurancebutton).click()//('Quality Assurance')
        //const option = await $('span=Solutions')
        await browser.pause(6000)
        //await option.selectByVisibleText('Quality Assurance')
        //await option.click()
    }
}
export default new QualityPage();