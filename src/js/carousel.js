'use strict'

;(function() {

    const carousel = el => {
        let slide = document.querySelector(el)

        const injectButtons = el => {
            let prev = document.createElement('span')
            let next = document.createElement('span')
            let fragment = document.createDocumentFragment()

            prev.classList.add('prev')
            next.classList.add('next')
 
            prev.innerHTML = '&laquo;'
            next.innerHTML = '&raquo;'

            fragment.appendChild(prev)
            fragment.appendChild(next)
            
            el.appendChild(fragment);
        }

        const showSlide = (el, typeAction) => {
            let active, prev, next
            
            active = prev = next = el.querySelector('.show')

            if ('next' === typeAction && 
                null !== next.nextElementSibling) {

                document.querySelector(`.prev`).classList.remove('disabled')

                if (next.nextElementSibling.classList.item(0).indexOf('box') > -1) {
                    active.classList.remove('show')
                    next.nextElementSibling.classList.add('show')
                }
            }
            else if ('prev' === typeAction &&
                null !== prev.previousElementSibling) {

                active.classList.remove('show')                
                document.querySelector(`.next`).classList.remove('disabled')
                prev.previousElementSibling.classList.add('show')

            }
            else {
                document.querySelector(`.${typeAction}`).classList.add('disabled')
            }
        }

        const eventListener = el => {
            let typeAction = 'active'

            document.querySelector('.next')
                .addEventListener('mousedown', () => {
                    typeAction = 'next'
                    showSlide(el, typeAction)
                })

            document.querySelector('.prev')
                .addEventListener('mousedown', () => {
                    typeAction = 'prev'
                    showSlide(el, typeAction)
                })
        }

        const init = el => {
            let items = el.querySelectorAll('.box-property')
            items[0].classList.add('show')

            injectButtons(el)
            eventListener(el)
        }

        init(slide)
    }

    carousel('#content')
})()