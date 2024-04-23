let title = "";
let author = "";
let pages = "";
let status = "";
let counter = 0;

const myLibrary = [];

function Book(title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  }

document.getElementById("book-input").addEventListener("submit", function(e){
    e.preventDefault();
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    status = document.querySelector('input[name="bookStatus"]:checked').value;
    document.getElementById("book-input").reset();
    myLibrary.push(new Book(title,author,pages,status));
    addDivs();
    reset();
    counter ++;
})

function reset(){
    title = "";
    author = "";
    pages = "";
    status = "";
}
function addDivs(){
    let bookDisplay = document.querySelector(".book-display");
    let bookDiv = document.createElement("div");
    bookDisplay.prepend(bookDiv);
    let titleDiv = document.createElement("div");
    titleDiv.className = "title";
    let authorDiv = document.createElement("div");
    authorDiv.className = "author";
    let pagesDiv = document.createElement("div");
    pagesDiv.className = "pages";
    let statusDiv = document.createElement("div");
    statusDiv.className = "status";

    bookDiv.className = "book";

    bookDiv.appendChild(titleDiv)
    bookDiv.appendChild(authorDiv)
    bookDiv.appendChild(pagesDiv)
    bookDiv.appendChild(statusDiv)

    document.querySelector(".book-display .book .title").innerHTML = title;
    document.querySelector(".book-display .book .author").innerHTML = author;
    document.querySelector(".book-display .book .pages").innerHTML = pages;
    document.querySelector(".book-display .book .status").innerHTML = status;
}



