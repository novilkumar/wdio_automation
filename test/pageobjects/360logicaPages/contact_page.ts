import Page from "./page";

class ContactPage extends Page{

    private get contactbutton() {return $('span=Contact')}
    private get contactname() {return $('#name')}
    private get contactemail() {return $('#email_address')}
    private get contactphone() {return $('#phone')}
    private get contactwebsite() {return $('#website')}
    private get contactmessage() {return $('#message')}
    private get submitbutton() {return $('')}
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    public open(){
        return super.open('')
    }

    public async VerifyContact(){
        await (await this.contactbutton).waitForDisplayed({timeout:500})
        await (await this.contactbutton).isDisplayed()
        browser.pause(4000)
    }
    public async FillInformation(contactname: string, contactemail: string, contactphone: number, contactwebsite: string, contactmessage: string ){
        await this.contactname.setValue(contactname)
        await this.contactemail.setValue(contactemail)
        await (await this.contactphone).setValue(contactphone)
        await this.contactwebsite.setValue(contactwebsite)
        await (await this.contactmessage).setValue(contactmessage)
    }
}
export default new ContactPage();