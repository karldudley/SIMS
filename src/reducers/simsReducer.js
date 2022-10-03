const initialState = {

  };
  
  const simsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ACH":
        return { ...state };
      case "ADD_BEH":
        return { ...state };
      default:
        return state;
    }
  }
  
  export default simsReducer;
