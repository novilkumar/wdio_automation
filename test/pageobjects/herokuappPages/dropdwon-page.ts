import Page from "./page";

class DropDown extends Page{
    
    private get heading() {return $('h3=Dropdown List')}
    private get dropdownlist() {return $('#dropdown')}

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    
    public open(){
        return super.open("/dropdown");
    }

    public async VerifyHeading(){

        await this.heading.waitForDisplayed({timeout:5000})
        expect(await (await this.heading).isDisplayed).toBe(true)
    }

    public async DropDown(){
        await (await this.dropdownlist).waitForDisplayed({timeout:5000})
        await this.dropdownlist.click()
    }
}

export default new DropDown();