
//получить содержимое от инпута
let input = document.querySelectorAll('.container-check');
let button = document.querySelector('.button');


button.addEventListener('click', () => {
    input.forEach((item) => {
        console.log(item.value); // содержимое ввода
        if(item.value !== '') {           //если содержимое ввода заполнено, создаем ли и очищаем инпут
            let li = document.createElement('li');
            li.textContent = item.value
            let list = document.querySelector('ul');
            list.appendChild(li)
            //очищаем инпут
            item.value = "";
        }
    })
});

