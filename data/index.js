function irmech(){
	var conjunt = document.getElementById('conjunt');
	var radgen = document.getElementsByName('radgen');	
	var main = document.getElementById('main');
	if (radgen[2].checked){
		conjunt.remove();
		var conjunt = document.createElement('div');
		conjunt.setAttribute('id', 'conjunt');
		var back = document.createElement('input');
		back.setAttribute('type', 'button');
		back.setAttribute('value', 'Cancel');
		back.setAttribute('onclick', 'canceloth()');
		var othergen = document.createElement('input');
		othergen.setAttribute('type', 'text');
		othergen.setAttribute('value', 'My gender is...');
		main.appendChild(conjunt);
		conjunt.appendChild(back);
		conjunt.appendChild(othergen);
	};
};

function canceloth(){
	var conjunt = document.getElementById('conjunt');
	conjunt.remove();
	var conjunt = document.createElement('div');
	conjunt.setAttribute('id', 'conjunt');
	var radgen = document.createElement('input');
	radgen.setAttribute('type', 'radio');
	radgen.setAttribute('name', 'radgen');
	radgen.setAttribute('id', 'mas');
	main.appendChild(conjunt);
	conjunt.appendChild(radgen);
	//Beta...
};