import {combineReducers} from 'redux'

const images = (state={},action ) => {
    switch(action.type){
        // Get All numbers
        case 'GET_IMAGE_REQUEST':
            return {...state,loading:true};
        case 'GET_IMAGE_SUCESS':
            return {...state,data:action.data,loading:false};
        case 'GET_IMAGE_ERROR':
            return {...state,error:action.error, loading:false};
    default:
        return state;
    }
}



export const rootReducer = combineReducers({
   images,
});