/* jshint esversion: 6 */

var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
      browser.pause(500);
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
    browser.pause(500);
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891');
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click();
  });

  When('I try to sign up', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click();
    browser.pause(1000);
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  Then('I expect to have loged in', () => {
    browser.waitForVisible('.usrImage.fa.fa-user-circle.fa-2x', 5000);
  });

  When(/^I search for a teacher with name (.*)$/, (name) => {
    var searchBox = browser.element('div.Select-control input');
    searchBox.click();
    browser.pause(500);
    searchBox.keys(name);
    browser.pause(500);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  When(/^I fill the sign up with (.*) and (.*)$/ , (email, password) => {
    var cajaSignUp = browser.element('.cajaSignUp');

    var nameInput = cajaSignUp.element('input[name="nombre"]');
    nameInput.click();
    nameInput.keys('Carlos Felipe');

    var lastnameInput = cajaSignUp.element('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.keys('Agudelo Ospina');

    var mailInput = cajaSignUp.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaSignUp.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);

    var programaInput = cajaSignUp.element('select[name="idPrograma"]');
    programaInput.selectByValue('12');

    var aceptaCheckbox = cajaSignUp.element('input[name="acepta"]');
    aceptaCheckbox.click();
  });

  When('I click a teacher\'s link', () => {
    browser.element('.profesor a').click();
    browser.pause(500);
  });

  When(/^I click the button containing text (.*)$/, (text) => {
    browser.click('button=' + text);
    browser.pause(500);
  });

  When(/^I pick option with value (.*) in select with id (.*)$/, (value, id) => {
    const select = browser.element('#' + id);
    select.selectByValue('someValue3');
  });

  Then(/^I expect to see (.*)$/, error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });

  Then(/^I expect to see sweetalert with (.*)$/, error => {
    browser.waitForVisible('.sweet-alert', 50000);
    var alertText = browser.element('.text-muted.lead').element('div').getText();
    expect(alertText).to.include(error);
  });

  Then('I see a teacher\'s basic info', () => {
    browser.waitForVisible('.profesor', 5000);
  });

  Then('I see a teacher\'s page', () => {
    browser.waitForVisible('.nombreProfesor', 5000);
  });

  Then(/^I see the teacher (.*) basic info$/, (teacher) => {
    browser.getText('div*=' + teacher);
  });
});
