// State argument is not application state, only state that reducer is responsible for
export default (state=null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
