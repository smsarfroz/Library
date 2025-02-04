
const myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, numberOfPages, read) {
    const newBook = new Book(title, author, numberOfPages, read);
    myLibrary.push(newBook);
}

const container = document.querySelector(".container");

const button = document.querySelector("#btn");

button.addEventListener('click', () => {
    console.log("button clicked!");

    const dialog = document.createElement("dialog");
    dialog.open = "true";
    container.appendChild(dialog);

    //Title
    const form1 = document.createElement("form");
    form1.action = "#";
    form1.method = "POST";
    dialog.appendChild(form1);

    const label1 = document.createElement("label");
    label1.for = "Title";
    label1.textContent = "Title";
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.name = "Title";
    input1.id = "Title";

    form1.appendChild(label1);
    form1.appendChild(input1);



    //Author
        const form2 = document.createElement("form");
        form2.action = "#";
        form2.method = "POST";
        dialog.appendChild(form2);

        const label2 = document.createElement("label");
        label2.for = "Author";
        label2.textContent = "Author";
        const input2 = document.createElement("input");
        input2.type = "text";
        input2.name = "Author";
        input2.id = "Author";

        form2.appendChild(label2);
        form2.appendChild(input2);

    //Pages
        const form3 = document.createElement("form");
        form3.action = "#";
        form3.method = "POST";
        dialog.appendChild(form3);

        const label3 = document.createElement("label");
        label3.for = "Pages";
        label3.textContent = "Pages";
        const input3 = document.createElement("input");
        input3.type = "number";
        input3.name = "Pages";
        input3.id = "Pages";

        form3.appendChild(label3);
        form3.appendChild(input3);

    //Read
        const form4 = document.createElement("form");
        form4.action = "#";
        form4.method = "POST";
        dialog.appendChild(form4);

        const label4 = document.createElement("label");
        label4.for = "Read";
        label4.textContent = "Read";
        const input4 = document.createElement("input");
        input4.type = "checkbox";
        input4.name = "Read";
        input4.id = "Read";

        form4.appendChild(label4);
        form4.appendChild(input4);

    

    const addButton = document.createElement("button");
    const closeButton = document.createElement("button");
    addButton.textContent = "Add Book";
    closeButton.textContent = "Close";

    dialog.appendChild(addButton);
    dialog.appendChild(closeButton);


    addButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        container.appendChild(bookDiv);

        //title
        const title = document.createElement("p");
        const titleInput = document.getElementById("Title");
        title.textContent = titleInput.value;
        title.style.cssText = "font-weight: bold; font-size: 20px";
        bookDiv.appendChild(title);

        //author
        const author = document.createElement("p");
        const authorInput = document.getElementById("Author");
        author.textContent = `By ${authorInput.value}`;
        bookDiv.appendChild(author);

        //pages
        const pages = document.createElement("p");
        const pagesInput = document.getElementById("Pages");
        pages.textContent = `${pagesInput.value} pages`;
        bookDiv.appendChild(pages);

        //read
        const read = document.createElement("p");
        const readInput = document.getElementById("Read");
        let readStatus = "Read";
        if (readInput.checked) {
            read.textContent = "Read";
        } else {
            read.textContent = "Not read";
            readStatus = "Not read";
        }
        bookDiv.appendChild(read);



        let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus);
        console.log(newBook);

        // const allformEle = document.querySelectorAll('form');
        // allformEle.forEach(element => {
        //     console.log("element :",element);
        //     console.log(element.value);
        //     element.reset();
        //     console.log(element.value);
        // });
        Book.prototype.toggle_read = function () {
            if (this.read === "Read") {
                this.read = "Not Read";
            } else {
                this.read = "Read";
            }
        }

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        bookDiv.appendChild(removeButton);

        const toggleRead = document.createElement("button");
        toggleRead.textContent = "Toggle Read";
        bookDiv.appendChild(toggleRead);

        removeButton.addEventListener('click', () => {
            bookDiv.remove();
        });

        toggleRead.addEventListener('click', () => {
            console.log("toggle read button clicked");

            newBook.toggle_read();
            read.textContent = newBook.read;
        });
        dialog.close();
    });
    closeButton.addEventListener('click', () => {
        console.log("close button clicked");
        dialog.close();
    });

    //reset form values
    //select all 'form'

    // const allformEle = document.querySelectorAll('form');

    // allformEle.forEach(element => {
    //     //what do I want to do with the element ? 
    //     //i want to close it 
    //     //can i close it directly ? 
    //     element.reset();
    // });
});

