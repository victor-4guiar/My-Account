function irmech(){ // Isso irá limpar todas as interações de Gênero e instalar a opção de digitar o Gênero diferente de Masculino e Feminino.
	var conjunt = document.getElementById('conjunt');
	var radgen = document.getElementsByName('radgen');	
	var main = document.getElementById('main');
	if (radgen[2].checked){ // Verificação para ver se a pessoa clicou em "Other".
		conjunt.remove(); // Limpar todos os elementos do Conjunto, inclusive ele próprio.
		var conjunt = document.createElement('div'); // Criar o conjunto novamente, só que com os dados de adicionar seu Gênero por texto.
		conjunt.setAttribute('id', 'conjunt');
		var back = document.createElement('input'); // Criar o botão "Cancelar".
		back.setAttribute('type', 'button');
		back.setAttribute('value', 'Cancel');
		back.setAttribute('onclick', 'canceloth()');
		var othergen = document.createElement('input'); // Criar a área onde podes escrever seu Gênero.
		othergen.setAttribute('type', 'text');
		othergen.setAttribute('value', 'My gender is...');
		main.appendChild(conjunt); // Adicionar esses três componentes no Documento (eles estavam criados apenas na memória, agora isso está os colocando na parte visual).
		conjunt.appendChild(back);
		conjunt.appendChild(othergen);
	};
};

function canceloth(){ // Se a pessoa apertar em cancelar, irá executar essa função, que deixará as opções de gênero como estava antes.
	var conjunt = document.getElementById('conjunt');
	conjunt.remove(); // Limpar todos os elementos do Conjunto, inclusive ele próprio.
	var conjunt = document.createElement('div'); // Criar o conjunto novamente, só que com os dados de adicionar seu Gênero por texto.
	conjunt.setAttribute('id', 'conjunt');
	var checkma = document.createElement('input'); // Checagem masculina.
	checkma.setAttribute('type', 'radio');
	checkma.setAttribute('name', 'radgen');
	checkma.setAttribute('id', 'mas');
	var lacheckma = document.createElement('label');
	lacheckma.setAttribute('for', 'mas');
	var checkfe = document.createElement('input'); // Checagem feminina.
	checkfe.setAttribute('type', 'radio');
	checkfe.setAttribute('name', 'radgen');
	checkfe.setAttribute('id', 'fem');
	var lacheckfe = document.createElement('label');
	lacheckfe.setAttribute('for', 'fem');
	var checkot = document.createElement('input'); // Checagem diferenciada.
	checkot.setAttribute('type', 'radio');
	checkot.setAttribute('name', 'radgen');
	checkot.setAttribute('id', 'oth');
	checkot.setAttribute('onclick', 'irmech()');
	var lacheckot = document.createElement('label');
	lacheckot.setAttribute('for', 'oth');
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