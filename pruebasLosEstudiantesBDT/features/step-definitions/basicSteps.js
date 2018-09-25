/* jshint esversion: 6 */

const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
      browser.pause(500);
    }
  });

  When(/^I click on input with name (.*) and type (.*)$/, (name, input) => {
    var inputBox = cajaSignUp.element('input[name="' + name + '"]');
    inputBox.click();
    inputBox.keys(input);
  });
});
