'use strict';

module.exports = {

    calculatorPage: {
        zeroBtn: element(by.css('#cwbt43 > div > span')),
        oneBtn: element(by.css('#cwbt33 > div > span')),
        twoBtn: element(by.css('#cwbt34 > div > span')),
        threeBtn: element(by.css('#cwbt35 > div > span')),
        display: element(by.css('#cwos')),
    },

    clickBtn: function (btn) {
        btn.click();
    },


    clickOneBtn: function () {
        var calculatorPage = this.calculatorPage;
        calculatorPage.oneBtn.sendKeys(task);
        btn.click();
    },

    go: function (site) {
        browser.get(site);
    },

    addTask: function (task) {
        var angular = this.angularHomepage;
        angular.taskList.sendKeys(task);
    },

    submitTask: function () {
        var angular = this.angularHomepage;
        angular.taskButton.click();
    }

};
