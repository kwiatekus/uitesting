exports.command = function (query) {
    this
      .openUrl('http://www.google.com')
      .pause(1000)
      .setSearchQuery('Gliwice Software Barcamp')
      .clickGoogleSearch()
    return this;
};