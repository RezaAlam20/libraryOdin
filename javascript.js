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
    addToLib(newBook)
    console.log(mybooks)
})



