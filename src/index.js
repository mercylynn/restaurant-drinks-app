function getData(){
    return fetch('http://localhost:3000/menuItems')
   .then(resp => resp.json()) 
   .then((data) => populateMenu(data.menuItems))
   
}