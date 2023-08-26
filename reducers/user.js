const initialState = {
    isLoggedIn : false,
    me: null
}

const userRoot = (state = initialState, action) => {
    switch(action.type) {
        case 'logIn' :
            return { 
                ...state, 
                isLoggedIn: true,
                me: action.data
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn:false,
                me:null,
            }
        default: return state;
    }
}

export default userRoot;