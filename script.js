
let input = document.querySelector('.container-check');
let button = document.querySelector('.button');
let taskContainer = document.querySelector('.container-tasks');
let sort = document.querySelector('.container-list');
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

function clickImage () {
    sort.addEventListener('mouseover', () => {
        sort.src = (sort.src == 'images/strUpgrey.svg') ? 'images/strDownGrey.svg': 'images/StrDownblack.svg';
     
    });
}
    sort.addEventListener('click', () => { 
        sort.src = (sort.src == 'images/StrDownblack.svg') ? 'images/strUpgrey.svg' : 'images/StrUpBlack.svg'
    });
  /*  sort.addEventListener('mouseout', () => {
        sort.src = (sort.src == 'images/strDownblack.svg') ? 'images/StrUpgrey.svg' : 'images/strDownGrey.svg'; 
    })*/
    
  /* sort.addEventListener('mouseout', () => {
       if()
        sort.src = (sort.src == ) ? 'images/strUpgrey.svg' : 'images/StrDownGrey.svg'
    })*/
//}



function sortTasks(tasks) {
    sort.addEventListener('click', () => {
        if(sort.src = 'images/strDownblack.svg') {

            tasks.sort((a, b) => {
                if(a > b) {
                    return -1;
                } if(b > a) {
                    return 1;
                }
                
            });
        sort.src = 'images/strUpBlack.svg'
        } if(sort.src = 'images/strUpBlack.svg') {
            tasks.sort((a, b) => {
                if(a < b) {
                    return -1;
                } if(b < a) {
                    return 1;
                }
                
            });
        sort.src = 'images/strDownblack.svg'
        
        
        }
        refreshTasks(tasks)
    });
}
sortTasks(tasks);