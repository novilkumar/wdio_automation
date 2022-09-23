import { isThisTypeNode, server } from "typescript";
import Page from "./page";

class Toggle extends Page{

    private get ToggleButton() {return $('//nav/ul/li[7]')}
    private get ToggleName() {return $('#name')} //('#name')
    private get ToggleEmail() {return $('#email_address')}
    private get TogglePhone() {return $('#phone')}
    private get ToggleWebsite() {return $('#website')}
    private get ToggleMessage() {return $('#message')}
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
    }
}
export default new Toggle();