exports.command = function (address) {
    this
      .url(address)
      .waitForElementVisible('body', 1000)
    return this;
};