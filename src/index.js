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