import React, { useState } from "react"
import { FormWrapper } from "./addForm.styled"
import Images from "../images/images"
import Basics from "../basics/basics"
import Prices from "../prices/prices"
import Advantages from "../advantages/advantages"
import Submit from "../submit/submit"

const AddForm = ({
  name,
  street,
  city,
  district,
  handleInput,
  insertType,
  handleInsertType,
  toggleDropdown,
  toggleTypeDropdown,
  toggleCurrency,
  toggleCurrencyDropdown,
  sell,
  sellPrice,
  rentPrice,
  rent,
  sellAndRent,
  currency,
  handleInsertCurrency,
  handleSubmit,
  basicError,
  clearAllFields,
  clearBasics,
  clearPrices,
  getPrice,
  handleRentAndSellChoose,
}) => {
  const [types] = useState([
    { key: 1, name: "Flat" },
    { key: 2, name: "House" },
    { key: 3, name: "Garage" },
    { key: 4, name: "Commercial" },
    { key: 5, name: "Parcels" },
    { key: 6, name: "Rooms" },
  ])
  const [currencies] = useState([
    { key: 1, name: "PLN" },
    { key: 2, name: "EUR" },
    { key: 3, name: "USD" },
  ])
  const [advantages] = useState([
    { key: 1, name: "Garage", selected: false },
    { key: 2, name: "TV", selected: false },
    { key: 3, name: "Full AGD", selected: false },
    { key: 4, name: "Internet", selected: false },
    { key: 5, name: "Security", selected: false },
  ])
  return (
    <FormWrapper onSubmit={e => handleSubmit(e)}>
      <Images />
      <Basics
        city={city}
        name={name}
        street={street}
        types={types}
        clearAllFields={clearAllFields}
        district={district}
        basicError={basicError}
        handleInput={handleInput}
        toggleTypeDropdown={toggleTypeDropdown}
        toggleDropdown={toggleDropdown}
        insertType={insertType}
        handleInsertType={handleInsertType}
        clearBasics={clearBasics}
      />
      <Prices
        currencies={currencies}
        currency={currency}
        toggleDropdown={toggleDropdown}
        toggleCurrency={toggleCurrency}
        toggleCurrencyDropdown={toggleCurrencyDropdown}
        sell={sell}
        sellPrice={sellPrice}
        rentPrice={rentPrice}
        rent={rent}
        sellAndRent={sellAndRent}
        handleInsertCurrency={handleInsertCurrency}
        clearAllFields={clearAllFields}
        clearPrices={clearPrices}
        getPrice={getPrice}
        handleRentAndSellChoose={handleRentAndSellChoose}
      />
      <Advantages clearPrices={clearPrices} advantages={advantages} />
      <Submit />
    </FormWrapper>
  )
}

export default AddForm
