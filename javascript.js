let mybooks = []
function book(title ,author , pages ) { 
    this.title = title 
    this.author = author 
    this.pages = pages
    this.id = crypto.randomUUID()
}






function addToLib(book){
    mybooks.push(book)

}


document.querySelector(".submit").addEventListener("click" , ()=>{
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let newBook = new book(title , author , pages)
    CreateCard(newBook)
    addToLib(newBook)
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
    card.append(title)
    card.append(author)
    card.append(pages)
    document.querySelector(".container").append(card)

}


