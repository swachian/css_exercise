function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = function() {
        let readDesc = this.read ? "readed" : "not read yet"
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + readDesc
    }
}

let theHobbit = new Book('The Hobbiy', 'J.R.R Tolkien', 295)
theHobbit.title = 'aaa'

console.log(theHobbit.info())

// console.log(Object.getPrototypeOf(theHobbit) === Book.prototype)
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(theHobbit)) === Object.prototype)
// console.log(theHobbit.valueOf())

function a() {
    'use strict'

    console.log(this)
}

a()

const calc = {
    num: 0,
    increment() {
      console.log(this === calc); // => true
      this.num += 1;
      return this.num;
    }
  };

  const myDog = Object.create({
    sayName() {
      console.log(this === myDog); // => true
      return this.name;
    }
  });


  myDog.name = "aaa"
  vv = myDog.sayName.bind(myDog)
  vv()

