
let input = document.querySelector('.container-check');
let button = document.querySelector('.button');
let inputAll = document.querySelector('.container-change')
let taskContainer = document.querySelector('.container-tasks');
let tasks =[]; 

button.addEventListener('click', () => {
    if(input.value !== '') {        
        let div = document.createElement('div');
        div.classList.add('li')
        div.textContent = input.value
        //console.log(input.value)
        tasks.push(input.value)
        console.log(tasks)

        refreshTasks(tasks)

        input.value = "";
    }
});

function refreshTasks(tasks) {
    taskContainer.innerHTML = ''

    tasks.forEach((item) => { //перебираем массив
        let div = document.createElement('div');
        div.textContent = item //создаем строки с вводом
        taskContainer.append(div)
        let close = document.createElement('img') // ставим крестик у каждого div
        close.classList.add('close')
        close.src = 'images/Group56kre.svg' 
        div.append(close)

        close.addEventListener('click', () => { 
            tasks = tasks.filter((item) => {
                return div.textContent !== item;
            });
            console.log(tasks);
            refreshTasks(tasks);
        });
        
    })    
}

function sortTasks() {
    // 1. Cортировка массива tasks

    // 2. refreshTasks(tasks)
}


/*let sort = document.querySelector('.container-list')
sort.addEventListener('click', (ev) => {
    if()
})*/

// tasks = [
//     'КУпить рыбу',
//     'Почистить зубы',
//     'Сходить в магазин'
// ]

