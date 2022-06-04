function irmech(){ // Isso irá limpar todas as interações de gênero e instalar a opção de digitar o gênero diferente de Masculino e Feminino.
	var conjunt = document.getElementById('conjunt');
	var radgen = document.getElementsByName('radgen');	
	var main = document.getElementById('main');
	var vectorColor1 = document.getElementById('name'); // Manipulação das paletas.
	var vectorColor2 = document.getElementById('description');
	var vectorColor3 = document.getElementById('terminad');
	var principal = document.getElementById('principal');
	vectorColor1.style.backgroundColor = 'var(--color01-yellow-tone)';
	vectorColor2.style.backgroundColor = 'var(--color01-yellow-tone)';
	vectorColor3.style.backgroundColor = 'var(--color01-yellow-tone)';
	document.body.style.backgroundColor = 'var(--color02-yellow-tone)';
	principal.style.color = 'var(--color05-yellow-tone)';
	if (radgen[2].checked){ // Verificação para ver se a pessoa clicou em "Other".
		conjunt.remove(); // Limpar todos os elementos do Conjunto, inclusive ele próprio.
		var conjunt = document.createElement('div'); // Criar o conjunto novamente, só que com os dados de adicionar seu gênero por texto.
		conjunt.setAttribute('id', 'conjunt');
		var back = document.createElement('input'); // Criar o botão "Cancelar".
		back.setAttribute('type', 'button');
		back.setAttribute('value', 'Cancel');
		back.setAttribute('onclick', 'canceloth()');
		back.setAttribute('id', 'cancelar');
		back.style.backgroundColor = 'var(--color01-yellow-tone)';
		var othergen = document.createElement('input'); // Criar a área onde podes escrever seu gênero.
		othergen.setAttribute('type', 'text');
		othergen.setAttribute('value', 'My gender is...');
		othergen.setAttribute('name', 'othergen');
		othergen.setAttribute('id', 'othergen');
		othergen.setAttribute('onclick', 'othclear()');
		othergen.style.backgroundColor = 'var(--color01-yellow-tone)';
		var pront = document.createElement('input'); // Criar o botão para quando estiver tudo pronto.
		pront.setAttribute('type', 'button');
		pront.setAttribute('value', 'Finished');
		pront.setAttribute('id', 'terminad');
		pront.setAttribute('onclick', 'calculardados2()');
		pront.style.backgroundColor = 'var(--color01-yellow-tone)';
		main.appendChild(conjunt); // Adicionar esses três componentes no Documento (eles estavam criados apenas na memória, agora isso está os colocando na parte visual).
		conjunt.appendChild(back);
		conjunt.appendChild(othergen);
		conjunt.appendChild(pront)
	};
};

function canceloth(){ // Se a pessoa apertar em cancelar, irá executar essa função, que deixará as opções de gênero como estava antes.
	var conjunt = document.getElementById('conjunt'); // Manipulação das paletas.
	var vectorColor1 = document.getElementById('name');
	var vectorColor2 = document.getElementById('description');
	var vectorColor3 = document.getElementById('terminad');
	var principal = document.getElementById('principal');
	vectorColor1.style.backgroundColor = 'var(--color00-gray-tone)';
	vectorColor2.style.backgroundColor = 'var(--color00-gray-tone)';
	vectorColor3.style.backgroundColor = 'var(--color00-gray-tone)';
	document.body.style.backgroundColor = 'var(--color01-gray-tone)';
	principal.style.color = '#1A1A1A';
	conjunt.remove(); // Limpar todos os elementos do conjunto, inclusive ele próprio.
	var conjunt = document.createElement('div'); // Criar o conjunto novamente, só que com os dados de adicionar seu gênero por texto.
	conjunt.setAttribute('id', 'conjunt');
	var checkma = document.createElement('input'); // Checagem masculina.
	checkma.setAttribute('type', 'radio');
	checkma.setAttribute('name', 'radgen');
	checkma.setAttribute('id', 'mas');
	checkma.setAttribute('onclick', 'moditichma()');
	var lacheckma = document.createElement('label');
	lacheckma.setAttribute('for', 'mas');
	lacheckma.setAttribute('class', 'msg')
	var checkfe = document.createElement('input'); // Checagem feminina.
	checkfe.setAttribute('type', 'radio');
	checkfe.setAttribute('name', 'radgen');
	checkfe.setAttribute('id', 'fem');
	checkfe.setAttribute('onclick', 'moditichfe()');
	var lacheckfe = document.createElement('label');
	lacheckfe.setAttribute('for', 'fem');
	lacheckfe.setAttribute('class', 'msg')
	var checkot = document.createElement('input'); // Checagem diferenciada.
	checkot.setAttribute('type', 'radio');
	checkot.setAttribute('name', 'radgen');
	checkot.setAttribute('id', 'oth');
	checkot.setAttribute('onclick', 'irmech()');
	var lacheckot = document.createElement('label');
	lacheckot.setAttribute('for', 'oth');
	lacheckot.setAttribute('class', 'msg');
	var pront = document.createElement('input'); // Criar o botão para quando estiver tudo pronto.
	pront.setAttribute('type', 'button');
	pront.setAttribute('value', 'Finished');
	pront.setAttribute('id', 'terminad');
	pront.setAttribute('onclick', 'calculardados()');
	main.appendChild(conjunt); // Adicionar os componentes na parte visual.
	conjunt.appendChild(checkma);
	conjunt.appendChild(lacheckma);
	lacheckma.innerHTML = ' Masculine ';
	conjunt.appendChild(checkfe);
	conjunt.appendChild(lacheckfe);
	lacheckfe.innerHTML = ' Feminine ';
	conjunt.appendChild(checkot);
	conjunt.appendChild(lacheckot);
	lacheckot.innerHTML = ' Other ';
	conjunt.appendChild(pront)
};

function nameclear(){
	var nam = document.getElementById('name');
	nam.value = '';
};

function descriptionclear(){
	var des = document.getElementById('description');
	des.value = '';
}

function othclear(){
	var otr = document.getElementById('othergen');
	otr.value = '';
}

function moditichma(){ // Manipulação das paletas.
	var vectorColor1 = document.getElementById('name');
	var vectorColor2 = document.getElementById('description');
	var vectorColor3 = document.getElementById('terminad');
	var principal = document.getElementById('principal');
	vectorColor1.style.backgroundColor = 'var(--color00-blue-tone)';
	vectorColor2.style.backgroundColor = 'var(--color00-blue-tone)';
	vectorColor3.style.backgroundColor = 'var(--color00-blue-tone)';
	principal.style.color = 'var(--color05-blue-tone)';
	document.body.style.backgroundColor = 'var(--color02-blue-tone)';
}

function moditichfe(){ // Manipulação das paletas.
	var vectorColor1 = document.getElementById('name');
	var vectorColor2 = document.getElementById('description');
	var vectorColor3 = document.getElementById('terminad');
	var principal = document.getElementById('principal');
	vectorColor1.style.backgroundColor = 'var(--color00-pink-tone)';
	vectorColor2.style.backgroundColor = 'var(--color00-pink-tone)';
	vectorColor3.style.backgroundColor = 'var(--color00-pink-tone)';
	principal.style.color = 'var(--color05-pink-tone)';
	document.body.style.backgroundColor = 'var(--color02-pink-tone)';
}

function calculardados(){
	var nd = document.getElementById('name');
	var dc = document.getElementById('description');
	localStorage.setItem('description', dc.value);
	localStorage.setItem('name', nd.value);
	var radgen = document.getElementsByName('radgen');
	if (radgen[0].checked){
		localStorage.setItem('gender', 'Masculine');
			if (localStorage.getItem('name') == ' ' || localStorage.getItem('name') == 'My name is...' || localStorage.getItem('name') == 'undefined' || localStorage.getItem('name') == ''){
				window.alert('[ERROR] Please check the data and try again.');
			}else{
				preparar();
			}
	}else if (radgen[1].checked){
		localStorage.setItem('gender', 'Feminine');
			if (localStorage.getItem('name') == ' ' || localStorage.getItem('name') == 'My name is...' || localStorage.getItem('name') == 'undefined' || localStorage.getItem('name') == ''){
				window.alert('[ERROR] Please check the data and try again.');
			}else{
				preparar();
			}
	}else{
		window.alert('[ERROR] Please check the data and try again.');
	}
}

function calculardados2(){
	var nd = document.getElementById('name');
	var dc = document.getElementById('description');
	localStorage.setItem('description', dc.value);
	localStorage.setItem('name', nd.value);
	localStorage.setItem('gender', othergen.value);
	if (localStorage.getItem('gender') == ' ' || localStorage.getItem('gender') == 'My gender is...' || localStorage.getItem('gender') == 'undefined' || localStorage.getItem('gender') == ''){
		window.alert('[ERROR] Please check the data and try again.');
	}else if (localStorage.getItem('name') == ' ' || localStorage.getItem('name') == 'My name is...' || localStorage.getItem('name') == 'undefined' || localStorage.getItem('name') == ''){
		window.alert('[ERROR] Please check the data and try again.');
	}else{
		preparar();
	}
}

function preparar(){
	var description = document.getElementById('description');
	var main = document.getElementById('main');
	var lall = document.getElementById('lall');
	var othergen = document.getElementById('othergen');
	
	main.remove();
	var go = document.createElement('a');
	var about = document.createTextNode("Go");
	var main = document.createElement('div'); // Criar o main novamente, só que com os dados de adicionar seu gênero por texto.
	main.setAttribute('id', 'main');
	lall.appendChild(main);
	lall.appendChild(go);
	go.setAttribute('id', 'fizda');
	go.appendChild(about);
	go.href = "result.html";
	main.innerHTML = `<p id="tatch">Are you ready?!</p>`;
	if (localStorage.getItem('gender') == 'Masculine'){
		go.style.backgroundColor = 'var(--color00-blue-tone)';
	}else if (localStorage.getItem('gender') == 'Feminine'){
		go.style.backgroundColor = 'var(--color00-pink-tone)';
	}else {
		go.style.backgroundColor = 'var(--color01-yellow-tone)';
	}
}