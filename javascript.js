let mybooks = []


class book {  
    constructor(title , author , pages , id ) { 
        this.title = title 
        this.author = author 
        this.pages = pages
        this.id = crypto.randomUUID()
            


    }


}




function addToLib(book){
    mybooks.push(book)

}


document.querySelector(".submit").addEventListener("click" , ()=>{
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    if (!title || !author || !pages) { 
        alert("please fill the required fields")
        return
    }
    let newBook = new book(title , author , pages)
    addToLib(newBook)
    displayBooks()
    document.getElementById("title").value = "";
    document.getElementById("author").value = ""; 
    document.getElementById("pages").value = "";
})



function CreateCard(book){ 
    let card = document.createElement("div")
    let title = document.createElement("p")
    title.textContent = `title: ${book.title}`
    let author = document.createElement("p")
    author.textContent = `author: ${book.author}`
    let pages = document.createElement("p")
    pages.textContent = `pages: ${book.pages}`
    let status = document.createElement("button")
    status.classList.add("notread")
    status.textContent = "not read"
    status.addEventListener("click" , ()=> {
    if(status.textContent == "not read") {
        status.textContent = "read"
        status.classList.remove("notread")
        status.classList.add("read")
    }
    else if (status.textContent == "read"){ 
        status.textContent = "not read"
        status.classList.remove("read")
        status.classList.add("notread")

    }})
    card.append(title)
    card.append(author)
    card.append(pages)
    card.append(status)
    removebutton = document.createElement("button")
    removebutton.textContent = "remove"
    removebutton.classList.add("removeBtn")
    card.append(removebutton)
    removeBook(book)

    document.querySelector(".container").append(card)

}


function displayBooks(){ 
    let container = document.querySelector(".container")
    while (container.firstChild) { 
        container.removeChild(container.firstChild)
    }
    
    mybooks.forEach(book =>{ 
        CreateCard(book)
    })
}

function removeBook(book){ 
    removebutton.addEventListener("click" , () => { 
        for( let i = 0 ; i < mybooks.length ; i++) { 
            if (mybooks[i].id == book.id){ 
                mybooks.splice([i] , 1 )
                displayBooks()
            }

        }
    })
    
}


