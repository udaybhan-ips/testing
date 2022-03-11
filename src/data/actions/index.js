import {getImagesDetailsService} from '../services/index'



export const getImagesAction = {
    getImages,
}

function getImages (images) {
    return dispatch =>{
        dispatch({type:'GET_IMAGE_REQUEST'});
        getImagesDetailsService.getImagesDetails(images)
        .then(
            data => dispatch({type:'GET_IMAGE_SUCESS', data}),
            error => dispatch({type:'GET_IMAGE_ERROR', error})
        )
    }
}