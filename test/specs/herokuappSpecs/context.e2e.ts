//import contextMenuPage from "../pageobjects/context-menu-page"

import contextMenuPage from "../../pageobjects/herokuappPages/context-menu-page";

describe("Context Page", async function() {

    it ("Test case 1", async function() {
        
        await contextMenuPage.open();
        await browser.pause(6000);
    })
    
})