import Page from "./page";

class CheckBox extends Page{

    public open() {
        return super.open("/checkboxes");
    }

}

export default new CheckBox();