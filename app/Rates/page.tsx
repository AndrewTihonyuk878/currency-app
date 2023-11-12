"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

import CurrencyInput from "../(components)/CurrencyInput";
import { getAllRates, setAmount, setCurrency } from "../redux/currencySlice";
import { SectionWrapper } from "../hoc";
import { getRates } from "../request/rates";
import { RootState } from "../redux/store";

const Rates = () => {
  const dispatch = useDispatch();

  const rates = useSelector((state: RootState) => state.currency.rates);
  const amount = useSelector((state: RootState) => state.currency.amount);
  const currency = useSelector((state: RootState) => state.currency.currency);

  useEffect(() => {
    const fetchRates = async () => {
      const res = await getRates();
      dispatch(getAllRates(res.data));
    };
    fetchRates();
  }, []);

  function changeRatesAmount(obj: object, amount: number, currency: string) {
    let changedObject = Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        (value * amount) / rates[currency],
      ])
    );
    dispatch(getAllRates(changedObject));

    return changedObject;
  }

  function changeRatesCurrency(obj: object, currency: string, amount: number) {
    let changedObject = Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        (value / rates[currency]) * amount,
      ])
    );
    dispatch(getAllRates(changedObject));

    return changedObject;
  }

  function handleAmountChange(amount: number) {
    changeRatesAmount(rates, amount, currency);
    dispatch(setAmount(amount));
  }

  function handleCurrencyChange(currency: string) {
    changeRatesCurrency(rates, currency, amount);
    dispatch(setCurrency(currency));
  }

  return (
    <div className="grid content-center justify-items-center">
      <motion.div
        className="mt-6"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <CurrencyInput
          onAmountChange={handleAmountChange}
          onCurrencyChange={handleCurrencyChange}
          currencies={Object.keys(rates)}
          amount={amount}
          currency={currency}
        />
      </motion.div>

      <motion.table
        className="currency__table"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
      >
        <thead>
          <tr>
            <th>Country</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([key, value]) => (
            <tr key={key}>
              <td className="flex gap-3">
                <ReactCountryFlag
                  countryCode={key.slice(0, -1)}
                  svg
                  title={key.slice(0, -1)}
                />
                <div>{key}</div>
              </td>
              <td>{value.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default SectionWrapper(Rates);
