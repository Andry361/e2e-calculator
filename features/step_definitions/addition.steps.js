// features/step_definitions/addition.steps.js
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode, Before } = require('cucumber');
var calculatorPage = require('../pages/calculator.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    Before(function () {
        calculatorPage.go('https://www.google.ru/search?q=calculator');
        browser.sleep(150);
    });

    When('I enter {string}', function (enterNumber) {
        calculatorPage.enter(enterNumber);
    });

    When('I click plus button', function () {
        calculatorPage.clickPlus();
    });

    When('I click equal button', function () {
        calculatorPage.clickEqual();
    });

    When('I click mines button', function () {
        calculatorPage.clickMines();
    });

    Then('I should see {string} in display', function (enterNumber, next) {
        var display = calculatorPage.calculatorPage.display;
        expect(display.getText()).to.eventually.equal(enterNumber).and.notify(next);
    });
});
