const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

function eventListeners() {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const titleValue = title.value;
    const authorValue = author.value;
    const yearValue = year.value;
    const book = new UI(titleValue, authorValue, yearValue);

    const ui = new UI();

    if (titleValue === "" || authorValue === "" || yearValue === "") {
      form.classList.add("error");
      setTimeout(function() {
        form.classList.remove("error");
      }, 1000);
    } else {
      form.classList.add("success");
      setTimeout(function() {
        form.classList.remove("success");
      }, 1000);
      ui.addBooks(book);
      ui.clearFields();
    }
  });
}

function UI(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

UI.prototype.addBooks = function(book) {
  const tr = document.createElement("tr");
  tr.innerHTML = `    
    <td>${book.title}</td>
    <td>${book.author}</td> 
    <td>${book.year}</td>
    <td><a href = "#" class = "delete">X<a></td>`;

  bookList.appendChild(tr);
};

UI.prototype.clearFields = function() {
  title.value = "";
  author.value = "";
  year.value = "";
};

UI.prototype.deleteBook = function(target) {
  if (target.classList.contains("delete")) {
    bookList.removeChild(target.parentElement.parentElement);
  }
};

bookList.addEventListener("click", function(e) {
  e.preventDefault();
  const ui = new UI();
  ui.deleteBook(e.target);
});

document.addEventListener("DOMContentLoaded", eventListeners);
