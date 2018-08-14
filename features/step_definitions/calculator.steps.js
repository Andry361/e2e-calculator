// features/step_definitions/addition.steps.js
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode, Before } = require('cucumber');
var calculatorPage = require('../pages/calculator.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    Before({ timeout: 30000 }, function (scenario, next) {
        calculatorPage.go('https://www.google.ru/search?q=calculator');
        expect(browser.getTitle()).to.eventually.include('calculator').and.notify(next);
    });

    When('I enter {string}', function (numberStr) {
        calculatorPage.enter(numberStr);
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

    Then('I should see {string} in display', function (numberStr, next) {
        var display = calculatorPage.buttons.display;
        expect(display.getText()).to.eventually.equal(numberStr).and.notify(next);
    });
});
