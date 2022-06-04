export const convertToReal = (val: number) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const convertToStringBr = (val: number, minimumFractionDigits = 2) =>
	val.toLocaleString('pt-BR', { minimumFractionDigits });
