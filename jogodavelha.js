let jogador = "X";
let quadrados = document.querySelectorAll(".quadrado");
let reiniciar = document.getElementById("reiniciar");

quadrados.forEach((quadrado) => {
	quadrado.addEventListener("click", () => {
		if (quadrado.textContent === "") {
			quadrado.textContent = jogador;
			jogador = jogador === "X" ? "O" : "X";
			verificarVencedor();
		}
	});
});

reiniciar.addEventListener("click", () => {
	quadrados.forEach((quadrado) => {
		quadrado.textContent = "";
	});
	jogador = "X";
});

function verificarVencedor() {
	const combinacoes = [
		[q1, q2, q3],
		[q4, q5, q6],
		[q7, q8, q9],
		[q1, q4, q7],
		[q2, q5, q8],
		[q3, q6, q9],
		[q1, q5, q9],
		[q3, q5, q7],
	];

	combinacoes.forEach((combinação) => {
		if (
			combinação[0].textContent === combinação[1].textContent &&
			combinação[0].textContent === combinação[2].textContent &&
			combinação[0].textContent !== ""
		) {
			alert(`Jogador ${combinação[0].textContent} venceu!`);
			reiniciar.click();
		}
	});
}

