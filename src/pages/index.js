import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import HomeOffers from "../components/homeOffers/homeOffers"
import { createStore, combineReducers } from "redux"
import {
  ToggleBurger,
  Favourites,
  AddAdvantages,
  SearchResults,
  Estates,
  SwitchLanguage,
  Filter,
  ToggleFullScreen,
  FilterProps,
} from "../components/reducers"

const reducers = combineReducers({
  ToggleBurger,
  Favourites,
  AddAdvantages,
  SearchResults,
  Estates,
  SwitchLanguage,
  Filter,
  modal: ToggleFullScreen,
  filterProps: FilterProps,
})

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducers)

const IndexPage = () => (
  <Layout>
    <Search />
    <HomeOffers />
  </Layout>
)

export default IndexPage
