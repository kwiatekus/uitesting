module.exports = {
  'Test if BarCamp web page is indexed by google': function(browser) {
    browser
      .google('Gliwice Software Barcamp')
      .pause(1000)
      .clickHyperlinkByText('(Gliwice) - Meetup')
      .pause(3000)
      .end();
  }
};