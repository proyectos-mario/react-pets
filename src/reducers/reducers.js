const reducers = (state, action) => {
    const newObject = action.payload;
    switch (action.type) {
        case 'SET_PETS':

            return {
                ...state,
                pets: newObject
            }

        case 'SET_VAL_INPUT':

            return {
                ...state,
                searchInput: newObject
            }


        default: return state;
    }
}




export default reducers;