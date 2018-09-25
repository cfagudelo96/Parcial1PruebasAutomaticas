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

  When(/^I search for a teacher with name (.*)$/, (name) => {
    var searchBox = browser.element('div.Select-control input');
    searchBox.click();
    browser.pause(500);
    searchBox.keys(name);
    browser.pause(500);
  });
});
