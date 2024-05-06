let products={
  data:[

    {
      ProductName:"Regular white T-shirt",
      category:"TopWear",
      price:30,
     image: "001.jpg"
    },
    {
      ProductName:"Beige Short Skirt",
      category:"BottomWear",
      price:55,
      image:"007.jpg",
    },
    {
      ProductName:"Basic Knitted Top",
      category:"TopWear",
      price:49,
      image:"005.jpg",
    },
    {
      ProductName:"Sporty SmartWatch",
      category:"Watch",
      price:160,
      image:"008.jpg",
    },
    {
      ProductName:"Black Leather jacket ",
      category:"Jacket",
      price:250,
      image:"002.jpg",
    },
    {
      ProductName:"Pink Trousers",
      category:"BottomWear",
      price:77,
      image:"006.jpg",
    },
    {
      ProductName:"Brown Mens Jacket",
      category:"Jacket",
      price:85,
      image:"003.jpg",
    },
    {
      ProductName:"Comfy Gray Pants",
      category:"BottomWear",
      price:35,
      image:"004.jpg",
    },
  ]
}
for (let i of products.data){
  let card=document.createElement("div")
  card.classList.add("card",i.category,"hide")
  let imgContainer=document.createElement("div")
  imgContainer.classList.add("image-container")
  let image=document.createElement("img")
  image.setAttribute("src",i.image)
  imgContainer.appendChild(image)
  card.appendChild(imgContainer)

let container=document.createElement("div")
  container.classList.add("container")
  let name=document.createElement("h5")
  name.classList.add("product-name")
  name.innerText=i.ProductName.toUpperCase()
  container.appendChild(name)

  let price=document.createElement("h6")
   price.classList.add("price-name")
  price.innerText=i.price+"$"
  container.appendChild(price)



  card.appendChild(container)
  document.querySelector("#products").appendChild(card)
}
function filterProduct(value){
let buttons=document.querySelectorAll(".button-value")
  buttons.forEach((button)=>{
    if(value===button.innerText){
      button.classList.add("active")
    }else{
button.classList.remove("active")
    }
  })
  let elements=document.querySelectorAll(".card")
  elements.forEach((element)=>{
if(value==="all"){
  element.classList.remove("hide")
}else{
  if(element.classList.contains(value)){
    element.classList.remove("hide")
  }else{
    element.classList.add("hide")
  }
}
  })
}
// document.getElementById("search").addEventListener("click",()=>{
//   let searchInput=document.getElementById("search-input").value
//   let elements=document.querySelectorAll(".Product-name")
//   console.log(searchInput)
//   let cards=document.querySelectorAll(".card")
//   elements.forEach((element,index)=>{
//     if(element.innerText.includes(searchInput.toUpperCase())){
//       cards[index].classList.remove("hide")
//     }else{
//       cards[index].classList.add("hide")
//     }
//   })
// })

window.onload=()=>{
  filterProduct("all")

}
// document.getElementById ("search").addEventListener("click",()=> {
//
//   let searchInput = document.querySelector("#search-input").value
//   let elements = document.querySelectorAll(".Product-name")
//   let card = document.createElement("div")
//
// //   elements.forEach((element,index)=>{
// //     if(element.innerText.includes(searchInput.toUpperCase())){
// //       cards[index].classList.remove("hide")
//     //     }else{
// //       cards[index].classList.add("hide")
// //     }
// //   })
// // })
//
//
//   for (let card = 0; card <= card.length; card++) {
//     let a = elements[card].ProductName[0]
//     let value = a.innerHTML
//     if (value.toUpperCase().indexOf(searchInput) > -1) {
//       card[searchInput].classList.remove("hide")
//     } else {
//       card[searchInput].classList.add("hide")
//     }
//   }
// })


$(document).ready(function(){
  $("#search-input").on( "keyup",function(){
    let value=$(this).val().toLowerCase()
    $("ProductName").filter(function(){
 $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
    })
  })
})
