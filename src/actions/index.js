import _ from 'lodash';
import * as actionTypes from './types';
// import history from '../history';
import api from '../api/api';


/**
 * The sign in action creator. Handles the user sign in action
 * @param {the user's Google Id that we will user to identify them} userId 
 */
export const signIn = (userId, tokenId) => async dispatch => {
    // return {
        // type: actionTypes.SIGN_IN,
        // payload: userId
    // };
    const response = await api.post('/user', {
        userId: userId,
        tokenId: tokenId,
    }, {headers: {'Access-Control-Allow-Origin': '*'}});
    console.log(response);
    dispatch({type: actionTypes.SIGN_IN, payload: response});
};

/**
 * Sign out action creator
 */
export const signOut = () => {
    return {
        type: actionTypes.SIGN_OUT,
    };
};

/**
 * Verifies that the user ID and the user's token ID are valid. 
 * Helps prevent stale users or non-signed in users from accessing
 * our app
 * @param {User's Google ID} userId 
 * @param {The token ID associated with this user's login} tokenId 
 */
export const verifyUser = (userId, tokenId) => async dispatch => {
    const response = await api.post('/user', {
        userId: userId,
        tokenId: tokenId,
    }, {'Access-Control-Allow-Origin': '*'});
    dispatch({type: actionTypes.VERIFY_USER, payload: response});
};

/**
 * Getting categories
 */
export const fetchCategories = userId => async dispatch => {
    const response = await api.post('/categories', {
        userId: userId
    }, {headers: {}});
    dispatch({type: actionTypes.FETCH_CATEGORIES, payload: response});
};

/**
 * Category select action creator. Handles the user category select
 * action. Same as fetchExpenses
 * @param {Handles the user selected category} category 
 */
export const onCategorySelect = (userId, categoryId) => async dispatch => {
    const response = await api.post('/expenses', {
        userId: userId,
        categoryId: categoryId,
    }, {headers: {}});
    dispatch({
        type: actionTypes.FETCH_EXPENSES,
        payload: response.data
    });
};

/**
 * Add category action creator. Handles the user action of adding
 * a new category
 * @param {Handles user input for submitting a new category} event 
 */
export const onCategoryFormSubmit = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await api.post('/categories', {...formValues, userId});
    dispatch({
        type: actionTypes.ADD_CATEGORY,
        payload: response.data
    });
    // TODO update category list
    // history.push('/');
};

/**
 * Add expense action creator. Handles the user action of 
 * adding a new expense
 * @param {Handles user submit expense action} formValues 
 */
export const onExpenseFormSubmit = formValues => async (dispatch, userId) => {
    const response = api.post('/expenses', {...formValues, userId});
    dispatch({
        type: actionTypes.ADD_EXPENSE,
        payload: response.data
    });
    // history.push('/');
};

/**
 * 
 * @param {User id of current user} userId 
 * @param {Category id for the current selected category} categoryId 
 */
export const fetchExpenses = (userId, categoryId) => async dispatch => {
    const response = await api.post('/expenses', {
        userId: userId,
        categoryId: categoryId,
    }, {headers: {}});
    dispatch({
        type: actionTypes.FETCH_EXPENSES,
        payload: response.data
    });
};


/**
 * Deletes the expense given the id
 * @param {The id of the expense} expenseId 
 */
export const deleteExpense = expenseId => async dispatch => {
    await api.post('/expenses', {
        expenseId: expenseId,
        action: 'Delete'
    });
    dispatch({
        type: actionTypes.DELETE_EXPENSE,
        payload: expenseId
    });
    // history.push('/');
};