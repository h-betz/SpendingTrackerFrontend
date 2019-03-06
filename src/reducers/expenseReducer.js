import {FETCH_EXPENSES, ADD_EXPENSE, DELETE_EXPENSE} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_EXPENSES:
            return {...state, [action.payload.id]: action.payload};
        case ADD_EXPENSE:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};