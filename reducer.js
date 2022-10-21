import { intialState } from "./action";
import { FETCH_USER_FAIL, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./type";



const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true, }
        case FETCH_USER_SUCCESS:
            return { loading: false, users: action.data, error: '' }
        case FETCH_USER_FAIL:
            return { loading: false, users: [], error: action.data }
    }
}
export default userReducer;