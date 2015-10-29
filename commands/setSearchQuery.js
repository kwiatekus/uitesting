exports.command = function (value) {
    this
      .useXpath()
      .waitForElementVisible('//input[@type="text"]', 1000)
      .setValue('//input[@type="text"]', value)
    return this;
};