function load(){
	var nam = document.getElementById('nicknam');
	var pfp = document.getElementById('pfp');
	var des = document.getElementById('desc');
	var sti = document.getElementById('title');
	
	var nnn = localStorage.getItem('name');
	var ggg = localStorage.getItem('gender');
	var ddd = localStorage.getItem('description');
	
	if (ddd == 'underfined' || ddd == '' || ddd == ' '){
		des.remove();
	}else{
		des.innerHTML = `${ddd}`;
	}
	
	if (ggg == 'Masculine'){
		pfp.src = '../../images/pfp_m.png';
	}else if (ggg == 'Feminine'){
		pfp.src = '../../images/pfp_g.png';
	}else {
		pfp.src = '../../images/pfp_o.png';
	}
	nam.innerHTML = `${nnn}`;
	sti.innerHTML = `${nnn}`;
}