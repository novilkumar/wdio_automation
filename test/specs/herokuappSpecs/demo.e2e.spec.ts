describe ("My first dempo page", async function () {
    
    it("Test case 1",async function () {
        let result = 10/2;
        expect(result).toEqual(5);
    })

    it("Test case 2", async function () {
        let result = 12/2*4;
        expect(result).toEqual(24);
    })
})