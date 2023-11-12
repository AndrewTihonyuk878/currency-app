"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "./hoc";
import { getRates } from "./request/rates";
import CurrencyInput from "./(components)/CurrencyInput";

interface RatesObject {
  [x: string]: number;
}

const Home = () => {
  const [rates, setRates] = React.useState<RatesObject>({});
  const [amount1, setAmount1] = React.useState<number>(1);
  const [amount2, setAmount2] = React.useState<number>(1);
  const [currency1, setCurrency1] = React.useState<string>("USD");
  const [currency2, setCurrency2] = React.useState<string>("USD");

  useEffect(() => {
    const fetchRates = async () => {
      const res = await getRates();
      setRates(res.data);
    };
    fetchRates();
  }, []);

  function format(number: any) {
    return number.toFixed(3);
  }

  function handleAmount1Change(amount1: number) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1: string) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2: number) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2: string) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="mt-10">
      <motion.h1
        className="mb-10 text-[#e1ebfd] [text-shadow:0 0 5px #433aa8, 3px -1px 5px #271c6c]"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Currency App
      </motion.h1>
      <motion.div
        className="bg-black-100 p-12 rounded-xl first:mb-10"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
      >
        <div className="mb-10">
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
        </div>
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Home);
