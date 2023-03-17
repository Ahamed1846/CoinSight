function fetchCoins() {
    return async (dispatch) => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets', {
            headers: {
              'Authorization': 'Bearer 510d2044-958b-4df1-b16d-d119b25d779a'
            }
          })          
        const data = await response.json();
        dispatch({ type: "FETCHING_DATA_SUCCESSFUL", payload: data });
      } catch (error) {
        dispatch({ type: "FETCHING_DATA_FAILED", payload: error.message });
        console.log(error);
      }
    };
  }
  
  export { fetchCoins };
  