function createBook(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.info = `${title} by ${author}, ${pages} pages, ${readStatus}`;
}