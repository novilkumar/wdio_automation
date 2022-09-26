import { isThisTypeNode } from "typescript";
import Page from "./page";

class QualityPage extends Page{
    
    private get Solutions() {return $('span=Solutions')}
    private get Qualityassurancebutton() {return $('#menu-item-163')}
    private get Testautomationbutton() {return $('#menu-item-102')}
    private get Performancetestingbutton() {return $('#menu-item-103')}
    private get Cybersecuritybutton() {return $('#menu-item-94')}
    private get Digitaltransformationbutton() {return $('#menu-item-162')}

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
        await browser.pause(3000)
        //await option.selectByVisibleText('Quality Assurance')
        //await option.click()
    }

    public async VerifyTestautomation(){
        await this.Solutions.waitForEnabled({timeout:5000})
        await (await this.Solutions).click()
        await (await this.Solutions).moveTo()
        await (await this.Testautomationbutton).click()
        await browser.pause(3000)
    }

    public async VerifyPerformanceTesting(){
        await this.Solutions.waitForEnabled({timeout:5000})
        await (await this.Solutions).click()
        await (await this.Solutions).moveTo()
        await (await this.Performancetestingbutton).click()
        await browser.pause(3000)
    }

    public async VerifyCyberSecurity(){
        await this.Solutions.waitForEnabled({timeout:5000})
        await (await this.Solutions).click()
        await (await this.Solutions).moveTo()
        await (await this.Cybersecuritybutton).click()
        await browser.pause(3000)
    }

    public async VerifyDigitalTransformation(){
        await this.Solutions.waitForEnabled({timeout:5000})
        await (await this.Solutions).click()
        await (await this.Solutions).moveTo()
        await (await this.Digitaltransformationbutton).click()
        await browser.pause(3000)
    }

}
export default new QualityPage();