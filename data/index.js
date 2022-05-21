function irmech(){ // Isso irá limpar todas as interações de gênero e instalar a opção de digitar o gênero diferente de Masculino e Feminino.
	var conjunt = document.getElementById('conjunt');
	var radgen = document.getElementsByName('radgen');	
	var main = document.getElementById('main');
	if (radgen[2].checked){ // Verificação para ver se a pessoa clicou em "Other".
		conjunt.remove(); // Limpar todos os elementos do Conjunto, inclusive ele próprio.
		var conjunt = document.createElement('div'); // Criar o conjunto novamente, só que com os dados de adicionar seu gênero por texto.
		conjunt.setAttribute('id', 'conjunt');
		var back = document.createElement('input'); // Criar o botão "Cancelar".
		back.setAttribute('type', 'button');
		back.setAttribute('value', 'Cancel');
		back.setAttribute('onclick', 'canceloth()');
		back.setAttribute('id', 'cancelar');
		var othergen = document.createElement('input'); // Criar a área onde podes escrever seu gênero.
		othergen.setAttribute('type', 'text');
		othergen.setAttribute('value', 'My gender is...');
		othergen.setAttribute('name', 'othergen');
		othergen.setAttribute('id', 'othergen');
		othergen.setAttribute('onclick', 'othclear()');
		main.appendChild(conjunt); // Adicionar esses três componentes no Documento (eles estavam criados apenas na memória, agora isso está os colocando na parte visual).
		conjunt.appendChild(back);
		conjunt.appendChild(othergen);
	};
};

function canceloth(){ // Se a pessoa apertar em cancelar, irá executar essa função, que deixará as opções de gênero como estava antes.
	var conjunt = document.getElementById('conjunt');
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

function moditichma(){
	document.body.style.backgroundColor = 'var(--color00-pink-tone)';
}

function moditichfe(){
	document.body.style.backgroundColor = 'var(--color00-blue-tone)';
}