import checkboxPage from "../../pageobjects/herokuappPages/checkbox-page"

describe("Checkbox testing",async function () {

    it ("Testcase 1", async function() {
        
        await checkboxPage.open();
        await browser.pause(5000);
    })

    it("Test case 1",async function () {
        let result = 10/2;
        expect(result).toEqual(5);
    })

    it("Array test", async function(){
        const array = [1,2,5,6]
        expect(array).toBeElementsArrayOfSize(4);
    })

    it("String test",async function() {
        const string = 'helloword!'
        expect(string).toContain('hello');
    })

    it("Boolean test", async function(){
        const output = 2>5;
        expect(output).toBe(false);
    })
})
