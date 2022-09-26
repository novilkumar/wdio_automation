import { isThisTypeNode, server } from "typescript";
import Page from "./page";

class Toggle extends Page{

    private get ToggleButton() {return $('//nav/ul/li[7]')}
    private get ToggleName() {return $('#name')} //('#name')
    private get ToggleEmail() {return $('#email_address')}
    private get TogglePhone() {return $('#phone')}
    private get ToggleWebsite() {return $('#website')}
    private get ToggleMessage() {return $('#message')}
    private get Tooglesendmessage() {return $('span=Send message')}
    private get verifymessage() {return $('#fusion-notices-1')}
        /////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    public async open(){
        return super.open('')
    }
    public async clickOnTogglebutton(){
        await (await this.ToggleButton).click()
    }

    public async RequiredInfo(ToggleName:string, ToggleEmail:string, TogglePhone: number, ToggleWebsite:string, ToggleMessage:string){
        await this.ToggleName.setValue(ToggleName)
        await this.ToggleEmail.setValue(ToggleEmail)
        await this.TogglePhone.setValue(TogglePhone)
        await this.ToggleWebsite.setValue(ToggleWebsite)
        await this.ToggleMessage.setValue(ToggleMessage)
        await (await this.Tooglesendmessage).click()
        browser.pause(3000)
    }

    public async VerifySendMessage(){
        await (await this.verifymessage).waitForDisplayed()
        //const text = $('#fusion-notices-1')
        //expect(await this.verifymessage.getText()).toEqual('THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT.')
        //expect((await this.verifymessage).getText()).toEqual("THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT.")
        //expect(text).toEqual('THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT.')
        //await (await this.verifymessage).dismissAlert()
        //expect(await this.verifymessage.getText())
        //const print = expect(await this.verifymessage.getText())
        expect(await this.verifymessage).toBeExisting()
        const text = $('#fusion-notices-1')
        console.log(await text.getText())
        //console.log('Novil'+expect(await this.verifymessage.getText()))
        
    }
}
export default new Toggle();