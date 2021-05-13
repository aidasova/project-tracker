
let input = document.querySelector('.container-check');
let button = document.querySelector('.button');
let tasks =[]; //массив из эллементов ли со значениями

button.addEventListener('click', () => {
        if(input.value !== '') {        
            let li = document.createElement('li');
            li.textContent = input.value
            //console.log(input.value)
            tasks.push(input.value)
            console.log(tasks)
            refreshTasks(tasks, li)

            input.value = "";
        }
});

function refreshTasks(tasks, li) {
        let list = document.querySelector('.list');
        
        tasks.forEach((item) => { //перебираем массив
            li.textContent = item //создаем строки с вводом
            list.appendChild(li)
          //  input.append(list)
            let close = document.createElement('img') // ставим крестик у каждого li
            close.classList.add('close')
            close.src = 'images/Group56kre.svg' 
            li.append(close)

            close.addEventListener('click', () => { 
                li.remove();
            });
            close.addEventListener('mouseover', (event) => {
               // event.target.close.classList.add(':hover')
            });
        })    
}


/*
function changeColor(event) {
    event.target.style.color = '#833AE0'
};
function getRemove(event) {
    event.target.li.remove()
};
close.forEach((element) => {
    element.addEventListener('mouseover', changeColor);
    element.addEventListener('click', getRemove);
});*/
