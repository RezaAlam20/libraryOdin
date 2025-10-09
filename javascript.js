let mybooks = []
function book(title ,author , pages ) { 
    this.title = title 
    this.author = author 
    this.pages = pages
    this.id = crypto.randomUUID()
}


let newBook = new book(title , author , pages)


function addToLib(book){
    mybooks.push(book)

}
addToLib(newBook)


