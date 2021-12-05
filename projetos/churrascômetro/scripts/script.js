// Carne: 400g por pessoa + de 6 horas = 650g
// Cerveja: 1200ml por pessoa + de 6 horas = 2000ml
// Refrigerante/Agua: 1000ml por pessoa + de 6 horas 1500ml

// criancas valem por 0.5
let adults = document.getElementById("adults");
let kids = document.getElementById("kids");
let duration = document.getElementById("duration");

let result = document.getElementById("resultado");

function calcular() {
	let qtdAdultos = adults.value;
	let qtdCriancas = kids.value;
	let qtdHoras = duration.value;

	let qtdCarneTotal = carnePorPessoa(qtdHoras) * qtdAdultos + (carnePorPessoa(qtdHoras) * qtdCriancas) / 2;
	console.log("Carne total: " + qtdCarneTotal);

	let qtdCervejaTotal = cervejaPorPessoa(qtdHoras) * qtdAdultos;
	console.log("Cerveja total: " + qtdCervejaTotal);

	let qtdBebidaTotal = bebidaPorPessoa(qtdHoras) * qtdAdultos + (bebidaPorPessoa(qtdHoras) * qtdCriancas) / 2;
	console.log("Refri total: " + qtdBebidaTotal);

	result.innerHTML = `<p>${qtdCarneTotal / 1000} kg de carne</p>`;
	result.innerHTML += `<p>${Math.ceil(qtdCervejaTotal / 350)} latas de cerveja</p>`;
	result.innerHTML += `<p>${Math.ceil(qtdBebidaTotal / 2000)} garrafas de bebidas gerais (água/refri)</p>`;
}

function carnePorPessoa(duracao) {
	if (duracao < 6) {
		return 400;
	} else {
		return 650;
	}
}

function cervejaPorPessoa(duracao) {
	if (duracao < 6) {
		return 1200;
	} else {
		return 2000;
	}
}

function bebidaPorPessoa(duracao) {
	if (duracao < 6) {
		return 1000;
	} else {
		return 1500;
	}
}
