import React, { ChangeEvent } from "react";
import { CurrencyInputProps } from "../@types/types";

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}: CurrencyInputProps) => {
  return (
    <div className="bg-[#335] w-[320px] mx-0 my-auto grid grid-cols-[200px,120px] rounded-2xl">
      <input
        type="text"
        value={amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onAmountChange(e.target.value)
        }
        className="pl-3"
      />
      <select
        value={currency}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onCurrencyChange(e.target.value)
        }
        className="p-4"
      >
        {currencies.map((currency, index) => (
          <option key={index} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
