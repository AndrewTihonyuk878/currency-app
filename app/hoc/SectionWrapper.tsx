"use client";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const SectionWrapper = (Component: React.FC) =>
  function HOC() {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };

export default SectionWrapper;
