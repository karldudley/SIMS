const initialState = {
    ach: 10,
    beh: 5
};
  
const simsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ACH":
            return { ...state, ach: state.ach + 1 };
        case "ADD_BEH":
            return { ...state, beh: state.beh + 1 };
        default:
            return state;
    }
}
  
export default simsReducer;
