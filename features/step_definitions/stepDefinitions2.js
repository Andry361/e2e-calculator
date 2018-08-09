// features/step_definitions/stepDefinitions.js
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var calculatorPage = require('../pages/calculator.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given('I go tos {string}', function (site, next) {
        calculatorPage.go(site);
        next();
    });

    When('I click the one button', function (task, next) {
        calculatorPage.clickOneBtn();
        next();
    });

    Then('I should see "1" in display', function (next) {
        var display = calculatorPage.calculatorPage.display;
        expect(display.getText()).to.eventually.equal('1').and.notify(next);
    });
});
