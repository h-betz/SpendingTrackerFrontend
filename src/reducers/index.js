import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import expenseReducer from './expenseReducer';

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    category: categoryReducer,
    expenses: expenseReducer,
});