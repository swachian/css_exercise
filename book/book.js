const myLibrary = [];

function Book(name, author) {
    this.name = name
    this.author = author

    this.print = function() {
        console.log(`book: ${this.name}, ${this.author}`)
    }
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

let book1 = new Book("Alice", "Owell")
let book2 = new Book("Paris", "Owell")

book1.print()

let d = document.querySelector("#book")
console.log(d)
d.append(book1.name)