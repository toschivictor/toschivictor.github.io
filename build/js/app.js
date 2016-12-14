'use strict';
(function (brokers) {
    var box = [];

    var createBox = function createBox(data) {
        var name = data.name;

        box.push('\n            <div class="box-property">\n                <img src="' + data.links.logo2x + '" alt="' + name + '" title="' + name + '">\n                <h3>' + name + '</h3>\n                <p>' + data.description + '</p>\n            </div>\n        ');

        document.getElementById('content').innerHTML = box.join('');
    };

    var checkCurrentVal = function checkCurrentVal(prev, curr) {
        var data = undefined !== prev ? prev : curr;
        return data;
    };

    brokers.reduce(function (prev, curr) {
        var broker = checkCurrentVal(prev, curr);
        createBox(broker);
    });
})(dataBrokers);
'use strict';
(function () {

    var carousel = function carousel(el) {
        var slide = document.querySelector(el);

        var injectButtons = function injectButtons(el) {
            var prev = document.createElement('span');
            var next = document.createElement('span');
            var fragment = document.createDocumentFragment();

            prev.classList.add('prev');
            next.classList.add('next');

            prev.innerHTML = '&laquo;';
            next.innerHTML = '&raquo;';

            fragment.appendChild(prev);
            fragment.appendChild(next);

            el.appendChild(fragment);
        };

        var showSlide = function showSlide(el, typeAction) {
            var active = void 0,
                prev = void 0,
                next = void 0;

            active = prev = next = el.querySelector('.show');

            if ('next' === typeAction && null !== next.nextElementSibling) {

                document.querySelector('.prev').classList.remove('disabled');

                if (next.nextElementSibling.classList.item(0).indexOf('box') > -1) {
                    active.classList.remove('show');
                    next.nextElementSibling.classList.add('show');
                }
            } else if ('prev' === typeAction && null !== prev.previousElementSibling) {

                active.classList.remove('show');
                document.querySelector('.next').classList.remove('disabled');
                prev.previousElementSibling.classList.add('show');
            } else {
                document.querySelector('.' + typeAction).classList.add('disabled');
            }
        };

        var eventListener = function eventListener(el) {
            var typeAction = 'active';

            document.querySelector('.next').addEventListener('mousedown', function () {
                typeAction = 'next';
                showSlide(el, typeAction);
            });

            document.querySelector('.prev').addEventListener('mousedown', function () {
                typeAction = 'prev';
                showSlide(el, typeAction);
            });
        };

        var init = function init(el) {
            var items = el.querySelectorAll('.box-property');
            items[0].classList.add('show');

            injectButtons(el);
            eventListener(el);
        };

        init(slide);
    };

    carousel('#content');
})();