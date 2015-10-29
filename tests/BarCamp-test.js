module.exports = {
  'Test if BarCamp web page is indexed by google': function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .useXpath()
      .pause(1000)
      .setValue('//input[@type="text"]', 'Gliwice Software Barcamp')
      .pause(1000)
      .waitForElementVisible('//*[@type="submit" and @name="btnG"]', 1000)
      .click('//*[@type="submit" and @name="btnG"]')
      .pause(1000)
      .waitForElementVisible('//a[contains(text(), "(Gliwice) - Meetup")]', 1000)
      .end();
  }
};