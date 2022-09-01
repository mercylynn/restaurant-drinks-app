function getData(){
    return fetch('https://mercylynn.github.io/restaurant-drinks-app/db.json')
   .then(resp => resp.json()) 
   .then((data) => getMenu(data.menuItems)) 
}
function getFirstObject(){
    return fetch ('https://mercylynn.github.io/restaurant-drinks-app/db.json')
    .then(resp => resp.json())
    .then((data) => renderMenuObj(data.menuItems[0]))
}
function getMenu(menuObj) {
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
    document.querySelector('#image').src = menuItems.image
    document.querySelector('#price').textContent = menuItems.price
    document.querySelector('#description').textContent = menuItems.description

    let reviews = document.querySelector('#reviewList')
    reviews.innerHTML = ''
    menuItems.reviews.map((review) => {
        let li= document.createElement('li')
        li.textContent = review
        li.id = 'review'
        reviews.appendChild(li)
        // let btn = document.createElement('button')
        // btn.id = 'deletebtn'
        // btn.textContent = ' X '
        // li.append(btn)
        // btn.addEventListener('click', () => li.remove())
       
    })
}

document.querySelector('#orderBtn').addEventListener('click',handleOrder)
    function handleOrder(){
    document.querySelector('#description').textContent = 'Order added to Cart'
    }
    document.querySelector('#reviewForm').addEventListener('submit', handleSubmit)
    function handleSubmit(e){
        e.preventDefault()
        let li = document.createElement('li')
        li.textContent = e.target.review.value
        document.querySelector('#reviewList').appendChild(li)
        document.querySelector('#reviewForm').reset()
        let btn = document.createElement('button')
        btn.id = 'deletebtn'
        btn.textContent = '  X  '
        li.append(btn)
        btn.addEventListener('click', () => e.target.review.value.remove())
        li.addEventListener('click', () => li.remove())  
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
    document.addEventListener('DOMContentLoaded',function(){
        getData();
        getFirstObject();
    })
