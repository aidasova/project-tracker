
let input = document.querySelector('.container-check');
let button = document.querySelector('.button');
let taskContainer = document.querySelector('.container-tasks');
let sort = document.querySelector('.container-list');
let tasks =[]; 
let sortFlag = true;

sort.addEventListener('click', function() {
    console.log(tasks, 'sort');
    sortTasks(tasks);
});


button.addEventListener('click', () => {
    if(input.value !== '') {        
        let div = document.createElement('div');
        div.classList.add('li')
        div.textContent = input.value
        console.log(tasks, 'add');
        tasks.push(input.value)
        console.log(tasks)

        refreshTasks(tasks)
        input.value = "";
    }
});
function addRemoveListener(div) {

    tasks = tasks.filter((item) => {
        return div.textContent !== item;
    });

    console.log(tasks);
    refreshTasks(tasks);
}

function refreshTasks(tasks) {
    taskContainer.innerHTML = ''
    console.log(tasks);
    tasks.forEach(function (item) { //перебираем массив
        console.log(this);
        let div = document.createElement('div');
        div.textContent = item //создаем строки с вводом
        taskContainer.append(div)
        let close = document.createElement('img') // ставим крестик у каждого div
        close.classList.add('close')
        close.src = 'images/Group56kre.svg' 
        div.append(close)

        close.addEventListener('click', function() { 
            addRemoveListener(div);
        });
    })    
}
    
sort.addEventListener('mouseover', () => {
    sort.src = (sortFlag === true) ? 'images/strDownBlack.svg' : 'images/StrUpblack.svg';
});
sort.addEventListener('click', () => { 
    sort.src = (sortFlag === false) ? 'images/strUpBlack.svg' : 'images/StrDownblack.svg';
});
sort.addEventListener('mouseout', () => {
    sort.src = (sortFlag === true) ? 'images/StrDownGrey.svg' : 'images/strUpgrey.svg'; 
})

function sortTasks(tasks) {

    if(sortFlag === true) {
        tasks.sort((a, b) => {
            if(a.toLowerCase() > b.toLowerCase()) {
                return -1;
            } if(b.toLowerCase() > a.toLowerCase()) {
                return 1;
            }
            
        });
        
        sortFlag = false;
    } else {
        tasks.sort((a, b) => {
            if(a.toLowerCase() < b.toLowerCase()) {
                return -1;
            } if(b.toLowerCase() < a.toLowerCase()) {
                return 1;
            }
            
        });
        sortFlag = true;
    
    }
    refreshTasks(tasks)
}


