import Page from "./page";

class Shadow extends Page{

    private get heading() { return $('h1=Simple template')}
    private get firsttext() {return $("span=Let's have some different text!")}
    private get firsttext1() {return $('span[slot="my-text"]')}
    private get secondtext() {return $('#content').shadow$$('li')}
    private get secondtext1() {return $$('>>>li')}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

    public async open(){
        return super.open("/shadowdom");
    }

    public async VerifyHeading(){
        expect((await this.heading).isDisplayed).toBe(true);
    }

    public async VerifyFirstText(){
        expect(this.firsttext.getText).toEqual("Let's have some different text!");
    }

    public async VerifyFirstText1(){
        expect(this.firsttext1.getText).toEqual("Let's have some different text!");
    }

    public async VerifySecondText(){
        expect(this.secondtext[0].getText).toEqual("Let's have some different text!");
        expect(this.secondtext[1].getText).toEqual('In a list!');
    }

    public async VerifyDeepText(){
        expect(this.secondtext1[0].getText).toEqual("Let's have some different text!");
        expect(this.secondtext1[1].getText).toEqual('In a list!');
    }
}

export default new Shadow();