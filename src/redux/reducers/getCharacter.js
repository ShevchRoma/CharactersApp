export const GET_CHARACTER = 'GET_CHARACTER'
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_FAIL = 'GET_CHARACTER_FAIL'

const initialState = {
    character: null,
    err: ''
}


const getCharacter = (state= initialState, action) =>{
             switch(action.type){
                 case GET_CHARACTER:
                     return{
                         ...state,
                         character: null
                     }
                 case GET_CHARACTER_SUCCESS:
                     return{
                         ...state,
                         character: action.payload
                     }
                 case GET_CHARACTER_FAIL:
                     return{
                         ...state,
                         character: null,
                         err: action.payload
                     }
                default:
                    return state;
             }
}

export default getCharacter


