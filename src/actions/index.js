import _ from 'lodash';
import * as actionTypes from './types';
import api from '../api/api';

/**
 * The sign in action creator. Handles the user sign in action
 * @param {the user's Google Id that we will user to identify them} userId 
 */
export const signIn = (userId) => {
    return {
        type: actionTypes.SIGN_IN,
        payload: userId
    };
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
 * Getting categories
 */
export const fetchCategories = () => async dispatch => {
    const response = await api.get('/categories');
    dispatch({type: 'FETCH_CATEGORIES', payload: response});
};

/**
 * Category select action creator. Handles the user category select
 * action
 * @param {Handles the user selected category} category 
 */
export const onCategorySelect = category => {
    return {
        type: actionTypes.SELECT_CATEGORY,
        payload: category
    };
};

/**
 * Add category action creator. Handles the user action of adding
 * a new category
 * @param {Handles user input for submitting a new category} event 
 */
export const onCategoryFormSubmit = category => {
    return {
        type: actionTypes.ADD_CATEGORY,
        payload: category
    };
};

/**
 * Add expense action creator. Handles the user action of 
 * adding a new expense
 * @param {Handles user submit expense action} expense 
 */
export const onExpenseFormSubmit = expense => {
    return {
        type: actionTypes.ADD_EXPENSE,
        payload: expense
    };
};

/**
 * 
 * @param {User id of current user} userId 
 * @param {Category id for the current selected category} categoryId 
 */
export const fetchExpenses = (userId, categoryId) => async dispatch => {
    const response = await api.post('/expenses');
    dispatch({type: actionTypes.FETCH_EXPENSES, payload: response.data});
};


export const deleteExpense = expense => {
    return {
        type: actionTypes.DELETE_EXPENSE,
        payload: expense
    };
};