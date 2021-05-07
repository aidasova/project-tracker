let input = document.querySelector('.container-check')
let items = document.querySelector('.items')
//newItems = document.createElement('li')

//console.log(input)
input.forEach((element) => {
    element.addEventListener('click', showItems)
})
function showItems (event) {
    if(items.style.display === 'none') {
        items.style.display = 'block'
        event.target.textContent = items
    } else {
        items.style.display = 'none'
    }
    
}

