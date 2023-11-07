const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile-navAr');



        menu_btn.addEventListener('click', function () {
            menu_btn.classList.toggle('is-active')
            mobile_menu.classList.toggle('is-active')
        })

        document.querySelectorAll('.mobile-navArB').forEach(item => {
            item.addEventListener('click', event => {
                menu_btn.classList.toggle('is-active')
                mobile_menu.classList.toggle('is-active')
            })
        })