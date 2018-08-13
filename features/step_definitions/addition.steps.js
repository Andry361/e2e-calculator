// features/step_definitions/addition.steps.js
var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode, BeforeAll, Before } = require('cucumber');
var calculatorPage = require('../pages/calculator.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    Before(function () {
        calculatorPage.go('https://www.google.ru/search?q=calculator');
    });


    // Given('I go to {string}', function (site, next) {
    //     calculatorPage.go(site);
    //     expect(browser.getTitle()).to.eventually.include('calculator').and.notify(next);
    // });

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
        browser.sleep(50);
        var display = calculatorPage.calculatorPage.display;
        expect(display.getText()).to.eventually.equal(enterNumber).and.notify(next);
    });
});
