const burgermenu = document.querySelector('.mnu-button__menu') // поиск кнопки


// проверка 
if(burgermenu ){
    const menuBackground = document.querySelector('.main-menu-background') // поиск кнопки
    const mainMenu = document.querySelector('.main-menu')

    // действие при нажатии 
    burgermenu.addEventListener('click',menu =>{
        burgermenu.classList.toggle('active')

        if(burgermenu.classList.contains('active')){
            menuBackground.classList.add('active')
            mainMenu.classList.add('active')
        }else{
            menuBackground.classList.remove('active')
            mainMenu.classList.remove('active')
        }

    })

}


