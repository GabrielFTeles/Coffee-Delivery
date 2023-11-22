export function currencyFormarter(value: number | string) {
  return `R$ ${value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  })}`;
}
