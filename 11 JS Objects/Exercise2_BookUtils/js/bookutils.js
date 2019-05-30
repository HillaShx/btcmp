var book1 = {
  title: "Remember Me",
  author: "Christopher Pike",
  published_in: 1989
}

var book2 = {
  title: "Harvest",
  author: "Tess Gerritsen",
  published_in: 1996
}

var bookUtils = {
  getFirstPublished: function(b1,b2) {
    if (b1.published_in < b2.published_in) {
      return b1;
    } else  if (b2.published_in < b1.published_in) {
      return b2;
    } else {
      return [b1,b2];
    }
  },
  setNewEdition: function(book,edition_year) {
    book.latestEdition = edition_year;
  },
  setLanguage: function(book,language) {
    book.language = language;
  },
  setTranslation: function(book,language,translator) {
    book.translations = {
      translator: translator,
      language: language
    }
    //  harvest: Dganit Dicceq, Hebrew
    //  remember me: Natalie Wynn, Hebrew
  },
  setPublisher: function(book,publisher,location) {
    book.publisher = {
      publisher: publisher,
      location: location
      // harvest: Modan, Ben Shemen
      // remember me: Modan, Ben Shemen
    }
  },
  samePublisher: function(b1,b2) {
    if (b1.publisher == b2.publisher) {
      return true;
    } else {
      return false;
    }
  }
}
