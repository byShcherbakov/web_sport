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


gsap.utils.toArray('[data-parallax-wrapper]').forEach(container =>{
    const img = container.querySelector('[data-parallax-wrapper-target]')

    const tl = gsap.timeline({
        scrollTrigger:{
            Trigger:container,
            scrub:true,
        }
    })
    tl.fromTo(img,{
        yPercent: - 15,
        ease: 'none',
    },{
        yPercent: 15,
        ease: 'none',
    } )
})

/* Анимация в главном меню */
const accordion = document.querySelectorAll('.accordion__col')
document.querySelectorAll('.accordion__col').forEach(col =>{
    col.addEventListener('mouseenter',()=>{
        accordion.forEach(c =>{
            c.classList.remove('active')
            col.classList.add('active')
        })
    })
})

