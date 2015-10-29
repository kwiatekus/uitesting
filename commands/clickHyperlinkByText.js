exports.command = function (text) {
    this
      .useXpath()
      .waitForElementVisible('//a[contains(text(), "'+text+'")]', 1000)
      .click('//a[contains(text(), "'+text+'")]')
    return this;
};