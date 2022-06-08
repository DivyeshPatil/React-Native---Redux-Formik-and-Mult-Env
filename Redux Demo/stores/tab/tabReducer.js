import * as tabActionTypes from './tabActions';

const initialState = {
    selectedTab: ""
}
// tabReducer -> reducer name
// state = initialState -> 1st argument -> initial state or current state asto
// action -> 2nd argument -> action as an argument
const tabReducer = (state = initialState, action) => {
    // under switch case -> all are perform ->  means how to perform and state will manage or change 
    // mhanje action kasi perform karychi
    switch (action.type) {
        case tabActionTypes.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
            
        default:
            return state
    }
}

export default tabReducer;