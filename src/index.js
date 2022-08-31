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
    document.querySelector('#reviewForm').addEventListener('submit', handleSubmit)
    function handleSubmit(e){
        e.preventDefault()
        let li = document.createElement('li')
        li.textContent = e.target.review.value
        document.querySelector('#reviewList').appendChild(li)
        document.querySelector('#reviewForm').reset()
        li.addEventListener('click', li.remove())  
    }
    const allStars = document.querySelectorAll('.star')
    const currentRating = document.querySelector('.currentstarrating')
    allStars.forEach((star,i)=> {
        star.onclick = function (){
            let currentStar = i + 1;
             currentRating.innerHTML = `${currentStar} of 5`
            allStars.forEach((star, j) => {
                if (currentStar >= j+1){
                    star.innerHTML = '&#9733';
                }else{
                    star.innerHTML = '&#9734';
                }
    
            })
    
        }
    })
