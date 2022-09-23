import Page from "./page"

class ContextMenu extends Page{

    public open() {
    return super.open("/context_menu");     
    }
}

export default new ContextMenu();