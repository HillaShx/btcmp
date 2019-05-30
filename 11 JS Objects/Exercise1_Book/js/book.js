var book = {
  title: "foundation",
  author: "Isaac Asimov",
  published_in: 1951
};

var anotherBook = {
  title: "SCUM Manifesto",
  author: "Valerie Solanas",
  published_in: 1967
}

function getBookInfo (obj) {
  return `The book ${obj.title} was written by ${obj.author} in the year ${obj.published_in}`;
}

// console.assert(getBookInfo(book) === "The book foundation was written by Isaac Asimov in the year 1951");
// console.assert(getBookInfo(anotherBook) === "The book SCUM Manifesto was written by Valerie Solanas in the year 1967");
