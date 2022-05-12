let btns = document.querySelectorAll("*[data-modul-btn]")//при нажатии на любую кнопку (их 3) открывалось окно связанное с данной кнопкой
for( let i = 0; i < btns.length; i++ ) {// создаем цикл для определения всех кнопок
    btns[i].addEventListener('click', function(){//создаем кликабельность кнопки и создаем функцию которая будет обрабатывать данное событие
        let name = btns[i].getAttribute('data-modul-btn')// создаем переменую,чтобы при нажатии на кнопку открывалось окно
        let modal = document.querySelector("[ data-modul-window = '"+name+"']")//здесь атрибут(data-modul-window)  с помощью сравнения (my_modul1 или my_modul2 или my_modul3), чему равна переменая  name в btns, чтобы сравнить и найти нужное окно.
        modal.style.display = "block";  //блокируем окна чтобы их видно не было.   
        let close = modal.querySelector (".close_modul_windows") // здесь мы крестику назначили переменную close
        close.addEventListener('click', function() {
            modal.style.display = "none"// при нажатии на крестик окно закроется
        })
    } )
}
window.onclick = function(e) //делаем кликабельным все окно 
{
    if(e.target.hasAttribute('data-modul-window') ){//выбираем чтобы работало только для всплывающего окна
        let moduls = document.querySelectorAll("*[data-modul-window]");//делаем чтобы работало для каждого окна
        for( let i = 0; i < moduls.length; i++ ) {//функция нужна чтобы искала все открытые окна
            moduls[i].style.display = "none"; // при нажатии на крестик найденное открытое окно закрывается
        }
    }

} 