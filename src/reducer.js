export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQClR8T-PqeBO5pIKGPafKd-qJWiZSy1KA-Yla_A-EgOJMxtB0Y4yTDAkV0JRnQjHaPAVIX5-_YOoywa5zmDbmdS58gecUSSAswF4hBfRixwEYuCgNTZNCns2o269hXs9CJ0v-uYQDUfYDtL5he-WTmPdx7gZ6NYOmaEpUorg7OmpACO"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}   

export default reducer;