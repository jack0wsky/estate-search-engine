import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
`
export const Label = styled.p`
  font-size: 0.9em;
  margin: 0 0 5px;
`
export const InputsWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  height: auto;
  width: max-content;
  min-width: 45%;
  background-color: #e7e7e7;
  transition: 0.3s ease-in-out;
  transform: scale(0);
  transform-origin: 50% 0;
  padding: 2px 0 2px;
`
export const MinInput = styled.input`
  height: 40px;
  width: 45%;
  border: 1px solid #a0a0a0;
  border-radius: 5px;
  padding: 10px;

  :focus ~ ${Dropdown} {
    transform: scale(1);
  }
`
export const MaxInput = styled(MinInput)``

export const Item = styled.li`
  list-style-type: none;
  line-height: 1.5em;
  padding: 0 0 0 5px;
  font-size: 1em;
`
