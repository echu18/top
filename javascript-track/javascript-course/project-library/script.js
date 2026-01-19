

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}


const bookshelf = document.getElementById('bookshelf');

function renderBooks() {
  bookshelf.replaceChildren();

  myLibrary.forEach(book => {
    let element = document.createElement("div");
    let title = document.createElement("h3");
    title.classList.add('title')
    title.innerText = book.title;
    element.appendChild(title);

    let author = document.createElement("h4");
    author.classList.add('author');
    author.innerText = `By: ${book.author}`;
    element.appendChild(author);

    let pages = document.createElement("p");
    pages.classList.add('pages')
    pages.innerText = `${book.pages} pages`;
    element.appendChild(pages);

    let readStatus = document.createElement("p");
    readStatus.classList.add('status');
    readStatus.innerText = book.readStatus ? 'Read' : 'Unread';
    element.dataset.read = book.readStatus ? true : false;
    element.appendChild(readStatus);

    element.id = book.id
    element.classList.add('book')

    let toggleReadBtn = document.createElement('button');
    toggleReadBtn.innerText = book.readStatus ? 'Mark unread' : 'Mark read';

    toggleReadBtn.addEventListener('click', e => {
      toggleRead(e);
    })

    element.appendChild(toggleReadBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete'

    deleteBtn.addEventListener('click', e => {
      let book = e.target.parentElement
      myLibrary = myLibrary.filter(item =>  item.id !== book.id);
      renderBooks();
    })

    element.appendChild(deleteBtn);

    bookshelf.appendChild(element);
  })
}

function toggleRead(e) {
  const bookId = e.target.parentElement.id;
  const book = myLibrary.find((item) => item.id === bookId);
  book.readStatus = !book.readStatus;
  renderBooks();
}


// seed

const book1 = new Book("Mindset", "Carol Dweck", 276, true);
const book2 = new Book("Ultralearning", "Scott Young", 305, false);
const book3 = new Book("Atomic Habits", "James Clear", 319, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
renderBooks();





document.getElementById('add-book').addEventListener('submit', e => {
  e.preventDefault();
  let data = new FormData(e.target)

  let title = data.get('title')
  let author = data.get('author')
  let pages = data.get('pages')
  let readStatus = data.get('readStatus') == 'on' ? true : false
  
  
  let book = new Book(title, author, pages, readStatus);
  addBookToLibrary(book);
  renderBooks();
})