
let input = document.querySelector('.container-check');
let button = document.querySelector('.button');
let inputAll = document.querySelector('.container-change')
let tasks =[]; 

button.addEventListener('click', () => {
        if(input.value !== '') {        
            let div = document.createElement('div');
            div.classList.add('li')
            div.textContent = input.value
            //console.log(input.value)
            tasks.push(input.value)
            console.log(tasks)

            refreshTasks(tasks, div)

            input.value = "";
        }
});

    function refreshTasks(tasks, div) {
        tasks.forEach((item) => { //перебираем массив
            div.textContent = item //создаем строки с вводом
            inputAll.append(div)
            let close = document.createElement('img') // ставим крестик у каждого div
            close.classList.add('close')
            close.src = 'images/Group56kre.svg' 
            div.append(close)

            close.addEventListener('click', () => { 
                div.remove();
        });
    
    })    
}
/*let sort = document.querySelector('.container-list')
sort.addEventListener('click', (ev) => {
    if()
})*/



