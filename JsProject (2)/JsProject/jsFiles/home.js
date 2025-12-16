let container = document.getElementById("con")
let products = []
let productDetails = ""
function fetchdata(){
  window.fetch("https://dummyjson.com/products").then(val=>val.json()
  ).then(res=>{
    products = res.products
    displayData(products)   
  })
  
}
function displayData(prod){
    productDetails = ""
    console.log(prod);
    prod.map(val=>{
        productDetails +=`
        <div class="card">
          <img src="${val.images[0]}" height="200" width="230"/>
          <p>${val.title.slice(0,25)}..</p>
          <p>$${val.price}</p>
          <div class="view">
            <p class="rating">${val.rating} <i class="fa-solid fa-star"></i></p>
            <button class="button">view more</button>
          </div>
        </div>
    ` 
    })
    container.innerHTML = productDetails
   
}

function search(e){
    let searchItem = e.target.value.toLowerCase()
   let filteredData = products.filter(val=>
        val.title.toLowerCase().includes(searchItem) || 
        val.category.toLowerCase().includes(searchItem)
    )   
    displayData(filteredData)
}


document.getElementById("searchProduct").addEventListener("input" , search)

fetchdata()