let counter = 0;
const myLibrary = [];
class Book {
    constructor(title,author,pages,status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}
document.getElementById("book-input").addEventListener("submit", function(e){
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.querySelector('input[name="bookStatus"]:checked').value;
    document.getElementById("book-input").reset();
    myLibrary.push(new Book(title,author,pages,status));
    addDivs(title);
    counter ++;
})
function addDivs(looptitle){
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
    let removeBtn = document.createElement("BUTTON");
    removeBtn.className = "remove";
    bookDiv.className = "book";
    removeBtn.value = counter;
    removeBtn.onclick = function(){
        this.parentElement.remove();
        let index = checkArray(looptitle)
        myLibrary.splice(index,1);
        counter --;
   }
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(statusDiv)
    bookDiv.appendChild(removeBtn);
    let arrayLength = myLibrary.length - 1;
    document.querySelector(".book-display .book .title").innerHTML = myLibrary[arrayLength].title;
    document.querySelector(".book-display .book .author").innerHTML = "By: "+  myLibrary[arrayLength].author;
    document.querySelector(".book-display .book .pages").innerHTML =  myLibrary[arrayLength].pages +" Pages";
    document.querySelector(".book-display .book .status").innerHTML = "Status: "+  myLibrary[arrayLength].status;
    document.querySelector(".book-display .book .remove").innerHTML = "Remove Book";
}
function checkArray(looptitle){
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].title === looptitle)
        return i;
    }
}