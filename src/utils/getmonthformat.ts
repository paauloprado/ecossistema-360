export const MAX_MONTHS_SHOW = 7;

export function getMonthFormat(mesInicial, anoInicial, mesFinal, anoFinal){

    const nomesMes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const vetor = [];

    // Lógica: Meses em JavaScript são de 0 a 11
    let atual = new Date(anoInicial, mesInicial - 1);
    const fim = new Date(anoFinal, mesFinal - 1);

    while (atual <= fim) {
        const mes = atual.getMonth();
        const ano = atual.getFullYear() % 100; // '23' ao invés de '2023'
        vetor.push(`${nomesMes[mes]}/${ano.toString().padStart(2, "0")}`);
        // Proximo mês
        atual.setMonth(atual.getMonth() + 1);
    }
    return vetor;
}

export  function getMonthFormatAll(){
	return getMonthFormat(9, 2020, 5, 2025);
}

export function getMonthFormatPeriod(interval: number){
	const months = getMonthFormatAll()
	const intervalApply = interval + 1;
	const total = months.length;
	const start = Math.max(total - (MAX_MONTHS_SHOW) * intervalApply, 0);
	const end = total - MAX_MONTHS_SHOW * interval;
	// console.log(getMonthFormatAll());
	return months.slice(start, end);
}

