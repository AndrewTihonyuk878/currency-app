interface CurrencyInputProps {
  amount: number;
  currency: string;
  currencies: string[];
  onAmountChange: Function;
  onCurrencyChange: Function;
}

export type { CurrencyInputProps };
