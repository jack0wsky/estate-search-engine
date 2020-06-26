import React, { useState } from "react"
import {
  SortingWrapper,
  SortContainer,
  SortInput,
  Label,
  SortDropdown,
  Item,
} from "./sorting.styled"

const Sorting = () => {
  const [sorting] = useState([
    { key: 1, name: "From lowest" },
    { key: 2, name: "From highest" },
  ])
  return (
    <SortingWrapper>
      <SortContainer>
        <Label>Sort by</Label>
        <SortInput readOnly placeholder="price" />
        <SortDropdown>
          {sorting.map(sort => {
            return <Item key={sort.key}>{sort.name}</Item>
          })}
        </SortDropdown>
      </SortContainer>
    </SortingWrapper>
  )
}

export default Sorting