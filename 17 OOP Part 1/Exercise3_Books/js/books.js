class Book {
  constructor(title, author,isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
}



let harvest = new Book("Harvest", "Tess Gerritsen", true);
let earthsea = new Book("Earthsea", "Ursula K. Le Guin", false);
let gotsm = new Book("Ghosts of the Shadow Market", "Cassandra Clare", false);
let books = [harvest,earthsea,gotsm];

function printBookInfo(book) {
  console.log(`${book.title} by ${book.author}`);
};

function printUnreadBooks(books) {
  for (let i=0; i<books.length; i++) {
    if (!books[i].isRead) {
      console.log(books[i].title);
    }
  }
};

printBookInfo(harvest);
printUnreadBooks(books);