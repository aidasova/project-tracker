
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
        //console.log(input.value)
        console.log(tasks, 'add');
        tasks.push(input.value)
        console.log(tasks)

        refreshTasks(tasks)
        input.value = "";
    }
});


function clickImage () {
    sort.addEventListener('mouseover', () => {
        sort.src = (sort.src == window.location.origin + '/images/strUpgrey.svg') ? 'images/strDownGrey.svg': 'images/StrDownblack.svg';
     
    });
}
    // sort.addEventListener('click', () => { 
    //     sort.src = (sort.src == window.location.origin + '/images/strDownblack.svg') ? 'images/strUpgrey.svg' : 'images/StrUpBlack.svg'
    // });
  /*  sort.addEventListener('mouseout', () => {
        sort.src = (sort.src == 'images/strDownblack.svg') ? 'images/StrUpgrey.svg' : 'images/strDownGrey.svg'; 
    })*/
    
  /* sort.addEventListener('mouseout', () => {
       if()
        sort.src = (sort.src == ) ? 'images/strUpgrey.svg' : 'images/StrDownGrey.svg'
    })*/
//}


function sortTasks(tasks) {

    if(sortFlag === true) {
        
        tasks.sort((a, b) => {
            if(a > b) {
                return -1;
            } if(b > a) {
                return 1;
            }
            
        });
        
        sortFlag = false;
    } else {
        tasks.sort((a, b) => {
            if(a < b) {
                return -1;
            } if(b < a) {
                return 1;
            }
            
        });
        sortFlag = true;
    
    }
    refreshTasks(tasks)
}

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
