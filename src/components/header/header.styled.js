import styled from "styled-components"
import { colors } from "../../theme"
import { small, medium, large, xlarge } from "../breakpoints"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 5vw 0;
  backdrop-filter: blur(20px);

  display: flex;
  justify-content: space-between;
  transition: 0.3s ease-in-out;

  ${props => {
    if (props.scrolled) {
      return `
         box-shadow:
  0 1.2px 2.2px -10px rgba(0, 0, 0, 0.025),
  0 2.9px 5.3px -10px rgba(0, 0, 0, 0.036),
  0 5.4px 10px -10px rgba(0, 0, 0, 0.045),
  0 9.6px 17.9px -10px rgba(0, 0, 0, 0.054),
  0 18px 33.4px -10px rgba(0, 0, 0, 0.065),
  0 43px 80px -10px rgba(0, 0, 0, 0.09)
;
      `
    }
    if (props.toggle) {
      return `
        transform: translateY(-100%);
      `
    }
  }}
`
export const Logo = styled.button`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const LogoSVG = styled.img`
  height: 50%;
`
export const Nav = styled.nav`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const Dropdown = styled.ul`
  width: max-content;
  height: max-content;
  background-color: #ffffff;
  position: absolute;
  z-index: 9999;
  left: -20%;
  top: 10vh;
  border-radius: 5px;
  box-shadow: 0 0.9px 2.2px -8px rgba(0, 0, 0, 0.025),
    0 2.2px 5.3px -8px rgba(0, 0, 0, 0.036),
    0 4.1px 10px -8px rgba(0, 0, 0, 0.045),
    0 7.4px 17.9px -8px rgba(0, 0, 0, 0.054),
    0 13.8px 33.4px -8px rgba(0, 0, 0, 0.065),
    0 33px 80px -8px rgba(0, 0, 0, 0.09);
  padding: 0 30px 0;
  transform: scale(0);
  transition: 0.3s ease-in-out;
  transform-origin: 0 0;
`
export const Item = styled.li`
  font-size: 1em;
  list-style-type: none;
  padding: 15px 0 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    font-weight: 600;
    transition: 0.3s ease-in-out;
    color: ${colors.pink};
  }
`
export const NavItem = styled.div`
  width: max-content;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 4px;
      border-radius: 50px 0 0 50px;
      bottom: 0;
      left: 0;
      transform-origin: 0 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
      background-color: ${colors.pink};
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 4px;
      border-radius: 0 50px 50px 0;
      bottom: 0;
      right: 0;
      transform-origin: 100% 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
      background-color: ${colors.pink};
    }
    &:hover:after {
      transform: scale(1);
      transition: 0.3s ease-in-out;
    }
    &:hover:before {
      transform: scale(1);
      transition: 0.3s ease-in-out;
    }
    &:hover ul {
      transform: scale(1);
      transition: 0.3s ease-in-out;
    }
  }
`
export const Interaction = styled.section`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;

  @media all and (max-width: ${small}) {
    width: 30%;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 35%;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 35%;
  }
`
export const FavouritesIcon = styled.button`
  border: none;
  background: none;
  height: 3.5vh;
  width: 3.5vh;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
  &:after {
    content: ${props => {
      if (props.favs > 0) {
        return `
          "${props.favs}";
        `
      } else {
        return `
          ""
        `
      }
    }};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10%;
    right: -30%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${colors.darkBlue};
    visibility: ${props => (props.favs > 0 ? "visible" : "hidden")};
  }
`
export const AddAdvertBtn = styled.button`
  padding: 15px 30px 15px;
  font-size: 1em;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${colors.pink};
  border: 2px solid ${colors.pink};
  color: #fff;
  transition: 0.3s ease-in-out;

  &:hover {
    background: none;
    color: #000;
    transition: 0.3s ease-in-out;
  }
  &:focus {
    outline: none;
  }

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const SwitchLanguage = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  @media all and (max-width: ${medium}) {
    display: none;
  }
`
export const Polish = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
  ${props => {
    if (!props.lang) return `color: ${colors.pink}; font-weight: 600;`
  }}

  &:focus {
    outline: none;
  }
`
export const English = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
  ${props => {
    if (props.lang) return `color: ${colors.pink}; font-weight: 600;`
  }}

  &:focus {
    outline: none;
  }
`
export const NavBtn = styled.button`
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => (props.mark ? colors.pink : "#000")};
  position: relative;

  &:focus {
    outline: none;
  }
  &:before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    height: 3px;
    background-color: ${colors.pink};
    bottom: -20%;
    transition: 0.3s ease-in-out;
  }
  &:hover:before {
    width: 100%;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    font-weight: 500;
  }
`
