const requestBooksType = 'REQUEST_BOOKS';
const receiveBooksType = 'RECEIVE_BOOKS';
const initialState = { books: [], isLoading: false };

export const actionCreators = {
  requestBooks: Id => async (dispatch, getState) => {
    if (Id === getState().Books.Id) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestBooksType, Id });

        const url = `https://localhost:44331/api/v1/books`;
    const response = await fetch(url);
    const books = await response.json();

    dispatch({ type: receiveBooksType, Id, books });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestBooksType) {
    return {
      ...state,
      Id: action.Id,
      isLoading: true
    };
  }

  if (action.type === receiveBooksType) {
    return {
      ...state,
      Id: action.Id,
      books: action.books,
      isLoading: false
    };
  }

  return state;
};
