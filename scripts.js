let title = "";
let author = "";
let pages = "";
let status = "";
let form = document.getElementById("book-input").elements;
const myLibrary = [];

function Book(title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  myLibrary.push(this);
  }

document.getElementById("book-input").addEventListener("submit", function(e){
    e.preventDefault();
    for (let i = 0; i < form.length; i++){

        if(form[i].id ==="title"){
            title = form[i].value
            console.log(title)
        }
        if(form[i].id ==="author"){
            author = form[i].value
            console.log(author)
        }
        if(form[i].id ==="pages"){
            pages = form[i].value
            console.log(pages)
        }
        if(form[i].type === "radio" && form[i].checked){
            status = form[i].value;
        } 
    }
    document.getElementById("book-input").reset();

    new Book(title,author,pages,status);
    reset();
    console.log(myLibrary);
    
})

function reset(){
    title = "";
    author = "";
    pages = "";
    status = "";
}
