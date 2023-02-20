// tady je místo pro náš program

// Ruleta

let button = document.querySelectorAll('.button');

button[0].addEventListener('click',
  function() {
    let message = 'Výchozí hodnota';
	let vstupCislo = Number(prompt('Zadejte číslo 0-36:'));

	if (vstupCislo <= null) {
        alert('Číslo je povinný údaj');
    } else if (vstupCislo > 36) {
        alert('Zadané číslo je větší než 36');
    } else {

        let vysledek = vstupCislo % 2;
        
        if (vysledek === 0 && vstupCislo === 0) {
            message = 'Zadané číslo <span style="padding: 5px; background: green; color: white; font-size: 20px; font-weight: bold;">' + vstupCislo + '</span>';
        
        } else if (vysledek === 0 && vstupCislo !== 0) {
            message = 'Zadané číslo <span style="padding: 5px; background: black; color: white; font-size: 20px; font-weight: bold;">' + vstupCislo + '</span> je sudé.';
            
        } else {
            message = 'Zadané číslo <span style="padding: 5px; background: red; color: white; font-size: 20px; font-weight: bold;">' + vstupCislo + '</span> je liché.';
        }

		let ruletaElm = document.querySelector('.ruleta');
		ruletaElm.innerHTML = message;
		
		button[0].classList.add('hidden');
	}
  }
);

// Přestupný rok

button[1].addEventListener('click',
  function() {
    let message = 'Výchozí hodnota';
	let vstupRok = Number(prompt('Zadejte rok'));

	if (vstupRok <= null) {
        alert('Rok je povinný údaj');
    } else if (vstupRok.toString().length !== 4) {
        alert('Nesprávný formát roku');       
    } else {
        
        if (((vstupRok % 4) === 0) || (((vstupRok % 100) === 0) && ((vstupRok % 400) === 0))) {
            message = '<span style="color: green;">Rok <strong>' + vstupRok + '</strong> je přestupný.</span>';
            
        } else {
            message = '<span style="color: red;">Rok <strong>' + vstupRok + '</strong> není přestupný.</span>';
        }

		let kalendarElm = document.querySelector('.kalendar');
		kalendarElm.innerHTML = message;
		
		button[1].classList.add('hidden');
	}
  }
);