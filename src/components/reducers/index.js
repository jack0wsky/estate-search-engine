export const Favourites = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      return [...state, action.payload]
    }
  }
}
