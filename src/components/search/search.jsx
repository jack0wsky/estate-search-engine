import React, { Component, createRef } from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import {
  SearchWrapper,
  SearchBar,
  InputWrapper,
  SearchInput,
  SearchDropDown,
  Result,
  SearchBtn,
  ToggleAdvanced,
  Filters,
} from "./search.styled"
import HomepageIllustration from "../homepageIllustration/homepageIllustration"
import AdvancedSearch from "../advancedSearch/advancedSearch"
import BasicFilter from "../searchEngine/basicFilters/basicFilter"
import EstatesData from "../../data/estates.json"
import { SearchResults } from "../actions/searchResults"

const mapStateToProps = state => {
  return {
    lang: state.SwitchLanguage,
  }
}

class Search extends Component {
  constructor() {
    super()
    this.state = {
      rent: false,
      city: "",
      chooseType: "Choose...",
      choosePayment: "Choose...",
      toggleType: false,
      togglePayment: false,
      togglePrice: false,
      toggleAdvanced: false,
      toggleSearchDropdown: false,
      estates: EstatesData,
      found: null,
      minRooms: "",
      maxRooms: "",
      price: "Choose...",
      minPrice: 0,
      maxPrice: 0,
      result: [],
      types: [
        { key: 1, name: "Flat" },
        { key: 2, name: "House" },
        { key: 3, name: "Garage" },
        { key: 4, name: "Commercial" },
        { key: 5, name: "Parcels" },
        { key: 6, name: "Rooms" },
        { key: 7, name: "All" },
      ],
      rooms: [
        { key: 1, amount: "Studio" },
        { key: 2, amount: 1 },
        { key: 3, amount: 2 },
        { key: 4, amount: 3 },
        { key: 5, amount: 4 },
        { key: 6, amount: "More than 4" },
      ],
      transaction: [
        { key: 1, name: "Sell" },
        { key: 2, name: "Rent" },
      ],
      floor: [
        { key: 1, amount: "Parter" },
        { key: 2, amount: 1 },
        { key: 3, amount: 2 },
        { key: 4, amount: 3 },
        { key: 5, amount: 4 },
        { key: 6, amount: 5 },
      ],
    }
    this.type = createRef()
  }
  handleSearchInput = e => {
    e.preventDefault()
    const { estates } = this.state
    this.setState({ city: e.target.value }, () => {
      const foundedEstates = estates.filter(estate => {
        return estate.city.includes(this.formatSearchInput())
      })
      const districts = []
      let reduced
      let result = []
      let city
      foundedEstates.forEach(estate => {
        districts.push(estate.district)
        reduced = [...new Set(districts)]
      })
      const obj = new Object()
      foundedEstates.forEach(estate => {
        city = estate.city
      })
      reduced.map(item => {
        obj.city = city
        obj.district = item
        result = [...result, { city: city, district: item }]
      })
      this.setState({ found: result })
    })
  }
  toggleDropdown = e => {
    e.preventDefault()
    this.setState({ toggleType: !this.state.toggleType })
  }

  insertAttributes = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.innerText })
  }
  insertValue = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.innerText })
  }

  handleTransaction = e => {
    e.preventDefault()
    this.setState({
      togglePayment: !this.state.togglePayment,
    })
  }
  openPrice = e => {
    e.preventDefault()
    this.setState({ togglePrice: true })
  }
  handlePrice = e => {
    e.preventDefault()
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.setState({
          price: `${this.state.minPrice} - ${this.state.maxPrice}`,
        })
      }
    )
  }
  applyPrice = e => {
    e.preventDefault()
    this.setState({ togglePrice: false })
  }
  handleRangeChange = e => {
    e.preventDefault()
    this.setState({ price: e.target.value })
  }
  handleAdvancedSettings = e => {
    e.preventDefault()
    this.setState({ toggleAdvanced: !this.state.toggleAdvanced })
  }
  formatSearchInput = () => {
    const { city } = this.state
    const capital = city.slice(0, 1).toUpperCase()
    const rest = city.slice(1, city.length).toLowerCase()
    const search = capital.concat(rest)
    return search
  }
  insertLocation = (estate, e) => {
    e.preventDefault()
    this.setState({
      city: `${estate.city}, ${estate.district}`,
      toggleSearchDropdown: false,
    })
  }
  handleSearch = e => {
    e.preventDefault()
    const {
      estates,
      chooseType,
      city,
      choosePayment,
      price,
      minPrice,
      maxPrice,
    } = this.state
    const dispatch = this.props.dispatch
    let res = estates.filter(estate => {
      return `${estate.city}, ${estate.district}` === this.state.city
    })
    res = estates
    /*if (city === "") {
      dispatch(SearchResults(estates))
      navigate("/results")
    } */
    if (chooseType !== "Choose...") {
      let choosen = res.filter(estate => {
        return estate.type === chooseType
      })
      res = choosen
    }
    if (choosePayment !== "Choose...") {
      res.filter(estate => {
        return estate.prices.forEach(price => {
          return price.type === choosePayment
        })
      })
    }
    if (price !== "Choose...") {
      if (choosePayment === "Rent") {
        res.filter(estate => {
          return (
            estate.prices[0].price > parseInt(minPrice) &&
            estate.prices[0].price < parseInt(maxPrice)
          )
        })
      }
    }
    dispatch(
      SearchResults(res, city, chooseType, choosePayment, minPrice, maxPrice)
    )
    navigate("/results")
  }

  render() {
    const { types, transaction, found } = this.state
    const { lang } = this.props
    return (
      <SearchWrapper>
        <HomepageIllustration />
        <SearchBar onSubmit={e => this.handleSearch(e)}>
          <InputWrapper>
            <SearchInput
              onFocus={() => this.setState({ toggleSearchDropdown: true })}
              onChange={e => this.handleSearchInput(e)}
              value={this.state.city}
              type="search"
              placeholder={lang ? "Search..." : "Szukaj..."}
              isEmpty={this.state.city}
              toggle={this.state.toggleSearchDropdown}
            />
            {this.state.city !== "" ? (
              <SearchDropDown toggle={this.state.toggleSearchDropdown}>
                {found !== null
                  ? found.map(estate => {
                      return (
                        <Result
                          key={estate.key}
                          onClick={e => this.insertLocation(estate, e)}
                        >
                          {estate.city}, {estate.district}
                        </Result>
                      )
                    })
                  : null}
              </SearchDropDown>
            ) : null}
          </InputWrapper>
          <Filters>
            <BasicFilter
              chooseType={this.state.chooseType}
              title={lang ? "Type of estate" : "Typ budynku"}
              array={types}
              insert={this.insertAttributes}
              insertMinRoom={this.insertValue}
              insertMaxRoom={this.insertValue}
              handleToggle={this.toggleDropdown}
              toggleState={this.state.toggleType}
              applyPrice={this.applyPrice}
              name={"chooseType"}
            />
            <BasicFilter
              chooseType={this.state.choosePayment}
              title={lang ? "Rent or buy?" : "Wynajem czy zakup?"}
              array={transaction}
              insert={this.insertAttributes}
              handleToggle={this.handleTransaction}
              toggleState={this.state.togglePayment}
              applyPrice={this.applyPrice}
              name={"choosePayment"}
            />
            <BasicFilter
              chooseType={this.state.price}
              array={null}
              title={lang ? "Price" : "Cena"}
              handleToggle={this.handlePrice}
              toggleState={this.state.togglePrice}
              applyPrice={this.applyPrice}
              handleRangeChange={this.handleRangeChange}
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              name={"price"}
              openPrice={this.openPrice}
              handlePrice={this.handlePrice}
            />
            <ToggleAdvanced
              toggleAdvanced={this.state.toggleAdvanced}
              onClick={e => this.handleAdvancedSettings(e)}
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M21.79 10.763l-2.168-.368-1.097-2.65.358-.502.918-1.284a.259.259 0 0 0-.029-.339L18.39 4.237a.252.252 0 0 0-.334-.03l-1.79 1.276-2.707-1.113-.103-.608-.26-1.543a.26.26 0 0 0-.26-.219h-1.954a.261.261 0 0 0-.26.222l-.372 2.18-2.645 1.114-1.782-1.284a.252.252 0 0 0-.15-.046.251.251 0 0 0-.185.08L4.2 5.648a.263.263 0 0 0-.03.339l1.283 1.802-1.08 2.657-.611.103-1.543.26a.26.26 0 0 0-.219.26v1.955c0 .13.091.238.222.26l2.18.371L5.515 16.3l-.364.506-.912 1.267a.26.26 0 0 0 .03.34l1.383 1.382a.252.252 0 0 0 .334.03l1.804-1.285 2.606 1.072.102.61.26 1.559a.26.26 0 0 0 .26.219h1.958a.26.26 0 0 0 .26-.221l.367-2.166 2.651-1.098.502.36 1.289.92c.04.03.092.046.149.046.07 0 .132-.025.184-.078l1.384-1.383a.263.263 0 0 0 .029-.339l-1.276-1.792 1.098-2.651.608-.101 1.558-.26a.26.26 0 0 0 .22-.26v-1.97a.244.244 0 0 0-.21-.244z"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            </ToggleAdvanced>
          </Filters>
          <SearchBtn>{lang ? "Search" : "Szukaj"}</SearchBtn>
          <AdvancedSearch
            minRooms={this.state.minRooms}
            maxRooms={this.state.maxRooms}
            insertMinRoom={this.insertMinRoom}
            insertMaxRoom={this.insertMaxRoom}
            toggleAdvanced={this.state.toggleAdvanced}
            floor={this.state.floor}
          />
        </SearchBar>
      </SearchWrapper>
    )
  }
}

export default connect(mapStateToProps)(Search)
