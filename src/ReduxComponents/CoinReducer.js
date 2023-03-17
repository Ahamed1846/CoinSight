const initialState = {
    Coins: [],
    error: null,
  };
  
  function CoinReducer(state = initialState, action) {
    switch (action.type) {
      case "FETCHING_DATA_SUCCESSFUL":
        return {
          ...state,
          Coins: action.payload,
          error: null,
        };
      case "FETCHING_DATA_FAILED":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default CoinReducer;
  