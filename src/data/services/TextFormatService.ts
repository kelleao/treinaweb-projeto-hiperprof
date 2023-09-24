const CurrencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TextFormatService = {
  currency(valor: string | undefined | number): string {
    if (!valor) return "";
    let price: number = +valor!;

    if (isNaN(price)) {
      price = 0;
    }

    return CurrencyFormatter.format(price);
  },
};
