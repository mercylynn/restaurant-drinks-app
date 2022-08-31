function getData(){
    return fetch('http://localhost:3000/menuItems')
   .then(resp => resp.json()) 
   .then((data) => populateMenu(data.menuItems))
   
}
function populateMenu(menuObj) {
    let menu = document.querySelector('#menuItems')
    menuObj.map((item) => {
        let li = document.createElement('li')
        li.textContent = item.name
        menu.appendChild(li)
        li.addEventListener('click', () => renderMenuObj(item))
    })
}
function renderMenuObj(menuItems){
    document.querySelector('#name').textContent = menuItems.name
    document.querySelector('#rating').textContent = menuItems.rating
    document.querySelector('image').src = menuItems.image
    document.querySelector('#price').textContent = menuItems.price
    document.querySelector('#description').textContent = menuItems.description

    let reviews = document.querySelector('#reviewList')
    reviews.innerHTML = ''
    menuItems.reviews.map((review) =>{
        let li= document.createElement('li')
        li.textContent = review
        li.id = 'review'
        review.appendChild(li)
        li.addEventListener('click', () => li.remove())
    })
}
document.querySelector('#orderBtn').addEventListener('click',handleOrder)
    function handleOrder(){
    document.querySelector('#description').textContent = 'Order aded to Cart'
    }