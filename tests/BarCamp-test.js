module.exports = {
  'Test if BarCamp web page is oparatable': function(browser) {
    browser
      .google('Gliwice Software Barcamp')
      .pause(1000)
      .clickHyperlinkByText(' - Meetup')
      .pause(3000)
      .end();
  }
};