import { test } from "@playwright/test";
const { SampleAppPage } = require('../models/sample-app.model')

test('log in success', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page)
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField("JC")
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Welcome, JC!")
});

test('Wrong password test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page)
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField("JC")
  await sampleAppPage.fillPasswordField('pwa')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
});

test('No Username test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page)
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Invalid username/password")
});

test('log out test', async ({ page }) => {
  const sampleAppPage = new SampleAppPage(page)
  await sampleAppPage.navigateToSampleApp()
  await sampleAppPage.fillUsernameField("JC")
  await sampleAppPage.fillPasswordField('pwd')
  await sampleAppPage.clickLoginButton()
  await sampleAppPage.expectedLoginTextToBe("Welcome, JC!")
  await sampleAppPage.clickLogoutButton()
  await sampleAppPage.expectedLoginTextToBe("User logged out.")
});

// const { TextInputPage } = require("../models/text-input.model");

// test("Submit Button Text test", async ({ page }) => {
//   const textInputPage = new TextInputPage(page);

//   let testInput = "Sample Button";

//   await textInputPage.navigateToTextInput();
//   await textInputPage.fillTextInputField(testInput);
//   await textInputPage.clickSubmitButton();
//   await textInputPage.expectInputTextAndButtonTextToBe(testInput);
// });
