'use strict';

((window, document, fields) => {
    const frm = document.getElementById('frm');

    const checkCurrentVal = (prev, curr) => {
        let data = undefined !== prev ? prev : curr;
        return data;
    };

    const createInputEl = data => {
        let item = document.createElement('input');
        
        item.setAttribute('name', data.name);
        item.setAttribute('type', data.type);
        item.setAttribute('id', data.id);        
        item.setAttribute('class', data.class);
        item.setAttribute('placeholder', data.placeholder);

        if (undefined !== data.Mask) {
            item.setAttribute('data-mask', data.Mask);
        }

        return item;
    };

    const createEl = (elType, data) => {
        let item = document.createElement(elType);
        
        item.setAttribute('name', data.name);
        item.setAttribute('id', data.id);        
        item.setAttribute('class', data.class);

        return item;
    }

    fields.input.map(curr => {
        let item = createInputEl(curr);
        frm.appendChild(item);
    });

    frm.appendChild(createEl('div', fields.map));
    frm.appendChild(createEl('img', fields.image));
    frm.appendChild(createEl('button', fields.button));
})(window, document, fields);