export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';


const initialState = {
    characters: null,
    err: ''
}


const getCharacters = (state= initialState, action) =>{
             switch(action.type){
                 case GET_CHARACTERS:
                     return{
                         ...state,
                         characters: null
                     }
                 case GET_CHARACTERS_SUCCESS:
                     return{
                         ...state,
                         characters: action.payload
                     }
                 case GET_CHARACTERS_FAIL:
                     return{
                         ...state,
                         characters: null,
                         err: action.payload
                     }
                default:
                    return state;
             }
}

export default getCharacters