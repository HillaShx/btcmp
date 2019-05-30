var library = [
  {
    author: "Tess Gerritsen",
    title: "Harvest",
    readingStatus: true
  },
  {
    author: "Valerie Solanas",
    title: "SCUM Manifesto",
    readingStatus: true
  },
  {
    author: "Christopher Pike",
    title: "Remember Me",
    readingStatus: false
  }
]

function getBooksToRead(lib) {
  for (var i=0; i<lib.length; i++) {
    if (lib[i].readingStatus === true) {
      console.log(`Book that can be read: ${lib[i].title} by ${lib[i].author}. Reading Status is ${lib[i].readingStatus}`)
    }
  }
}