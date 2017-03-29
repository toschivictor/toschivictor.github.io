'use strict';

((document) => {

	const cpfMask = val => {
		val = val.replace(/\D/g, '');
	    val = val.replace(/(\d{3})(\d)/, '$1.$2');
	    val = val.replace(/(\d{3})(\d)/, '$1.$2');
	    val = val.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

	    return val;
	};

	const phoneMask = val => {
		val = val.replace(/\D/g, '');
	    val = val.replace(/^(\d{2})(\d)/g, '($1) $2');
	    val = val.replace(/(\d)(\d{4})$/, '$1-$2');
	    
	    return val;
	};

	const imgPreview = (event, elPreview) => {
		let reader = new FileReader(),
			file   = event.target.files[0];

		reader.onload = () => {
			elPreview.src = reader.result;			
		};

		return reader.readAsDataURL(file);
	};

	const sendForm = function() {
		event.preventDefault();

		let inputs = this.elements;

		Object.keys(inputs).map(curr => {
	        localStorage.setItem(inputs[curr].name, inputs[curr].value);
	    });

		document.querySelector('.success').setAttribute('style', 'display: block');
	};

	let frm   = document.getElementById('frm'),
		cpf   = document.getElementById('txtCpf'),
		phone = document.getElementById('txtTelefone'),
		uplImage    = document.getElementById('uplImage'),
		imgRenderer = document.getElementById('mapRenderer'),
		prevImg     = document.createElement('img');

	imgRenderer.appendChild(prevImg);

	phone.addEventListener('keyup', function() {
		this.value = phoneMask(this.value);
	});

	cpf.addEventListener('keyup', function() {
		this.value = cpfMask(this.value);
	});

	uplImage.addEventListener('change', function() {
		imgPreview(event, prevImg);
	});

	frm.addEventListener('submit', sendForm)

})(document);