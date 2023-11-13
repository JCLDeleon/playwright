import { expect } from "@playwright/test";

exports.TextInputPage = class TextInputPage{

    constructor(page){
        this.page = page;
        this.textInputField = page.getByPlaceholder('MyButton');
        this.submitButton = page.locator('#updatingButton');
    }

    async navigateToTextInput(){
        await this.page.goto("http://www.uitestingplayground.com/textinput");
    }

    async fillTextInputField(input){
        await this.textInputField.fill(input);
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }

    async expectInputTextAndButtonTextToBe(input){
        await expect(this.submitButton).toHaveText(input);
    }

};