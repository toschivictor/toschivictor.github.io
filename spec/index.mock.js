'use strict';

let fields = {
	"input": [
		{
			"name": "txtFullname",
			"id": "txtFullname",
			"value": "",
			"type": "text",
			"class": "input",
			"placeholder": "Nome completo"
		},
		{
			"name": "txtCpf",
			"id": "txtCpf",
			"value": "",
			"type": "text",
			"Mask": "000.000.000-00",
			"class": "input",
			"placeholder": "CPF"
		},
		{
			"name": "txtTelephone",
			"id": "txtTelefone",
			"value": "",
			"type": "text",
			"Mask": "(00) 00000-0000",
			"class": "input",
			"placeholder": "Telefone"
		},
		{
			"name": "txtAddress",
			"id": "txtAddress",
			"value": "",
			"type": "text",
			"class": "input",
			"placeholder": "Endereço"
		},
		{
			"name": "txtComplement",
			"id": "txtComplement",
			"value": "",
			"type": "text",
			"class": "input",
			"placeholder": "Complemento"
		},
		{
			"name": "uplImage",
			"id": "uplImage",
			"class": "upload-button",
			"type": "file"
		}
	],
	"map": {
		"name": "mapRenderer",
		"id": "mapRenderer",
		"class": "map-renderer"
	},
	"image": {
		"name": "imgAvatar",
		"id": "imgAvatar",
		"class": "image"
	},
	"button": {
		"name": "btnSave",
		"id": "btnSave",
		"value": "",
		"class": "input"
	}
};

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
    
    return item;
});