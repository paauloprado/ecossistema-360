// import { useCalculatorCountStore } from "../store/useCalculatorCountStore"

export const updateStateFromCrossfilter = (reportPriorityGroup,examCountGroup) => {
	// const setExamPriceCount = useCalculatorCountStore((state) => state.setExamPriceCount);
	// const setReportPriceCount = useCalculatorCountStore((state) => state.setReportPriceCount);

	const reportData = reportPriorityGroup.all();
	const examData = examCountGroup.all();
  
	const newState = {
	  reportPriceCount: {
		DX: { high: 0, medium: 0, normal: 0 },
		CR: { high: 0, medium: 0, normal: 0 },
		MG: { high: 0, medium: 0, normal: 0 },
		CT: { high: 0, medium: 0, normal: 0 },
		MR: { high: 0, medium: 0, normal: 0 },
		US: { high: 0, medium: 0, normal: 0 },
		NM: { high: 0, medium: 0, normal: 0 },
		XA: { high: 0, medium: 0, normal: 0 },
	  },
	  examPriceCount: {
		DX: 0,
		CR: 0,
		MG: 0,
		CT: 0,
		MR: 0,
		US: 0,
		NM: 0,
		XA: 0,
	  }
	};
  
	reportData.forEach(({ key, value }) => {
	  if (newState.reportPriceCount[key]) {
		newState.reportPriceCount[key] = {
		  high: value.high,
		  medium: value.medium,
		  normal: value.normal,
		};
	  }
	});
  
	examData.forEach(({ key, value }) => {
	  if (newState.examPriceCount[key] !== undefined) {
		newState.examPriceCount[key] = value;
	  }
	});
  
	// Atualiza o estado (exemplo usando React)
	return newState;
	// setExamPriceCount(newState.examPriceCount);
	// setReportPriceCount(newState.reportPriceCount);
  };
  

  export function calcularTotalReportPrice(counts, prices) {
	const prioridades = ['high', 'medium', 'normal'];
	let total = 0;
  
	for (const modalidade in prices) {
		
	  const priceModalidade = prices[modalidade];
	  const countModalidade = counts[modalidade];
  
	  prioridades.forEach(prioridade => {
		const precoStr = priceModalidade[prioridade];
		const quantidade = countModalidade[prioridade];
  
		const preco = parseFloat(precoStr || '0');
		const qtd = parseInt(quantidade || 0);
  
		total += preco * qtd;
	  });
	}
  
	return total;
  }


  export function calcularTotalReportPriority(counts) {
	const prioridades = ['high', 'medium', 'normal'];
	let total = 0;
    const result = {
		high: 0,
		medium: 0,
		normal: 0
	}
	for (const modalidade in counts) {
		
	  const countModalidade = counts[modalidade];
  
	  prioridades.forEach(prioridade => {
		result[prioridade] += countModalidade[prioridade]
		
	  });
	}
  
	return result;
  }

 export function calcularTotalExamPrice(counts, prices) {
	let total = 0;
  
	for (const modalidade in prices) {
	  const preco = parseFloat(prices[modalidade] || 0);
	  const qtd = parseInt(counts[modalidade] || 0);
	  total += preco * qtd;
	}
  
	return total;
  }

  export function formatarMoeda(valor, locale = 'pt-BR', currency = 'BRL') {
	return new Intl.NumberFormat(locale, {
	  style: 'currency',
	  currency: currency,
	}).format(valor);
  }