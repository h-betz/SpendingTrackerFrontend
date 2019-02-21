export const onCategorySelect = category => {
    return {
        type: 'CATEGORY_SELECTED',
        payload: category,
    };
};

export const onCategoryFormSubmit = event => {
    return {
        payload: ''
    };
}

export const onExpenseFormSubmit = event => {
    return {
        payload: ''
    };
}