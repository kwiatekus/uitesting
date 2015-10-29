exports.command = function (address) {
    this
      .useXpath()
      .waitForElementVisible('//*[@type="submit" and @name="btnG"]', 1000)
      .click('//*[@type="submit" and @name="btnG"]')
    return this;
};