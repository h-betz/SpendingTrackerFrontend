import React from 'react';

class CategoryForm extends React.Component {
	render() {
		return (
	      <div class="card z-depth-4">
	        <div>
	          <form onsubmit="addCategory();return false;" class="fixed" method="POST" id="category-form">
	            <div class="form-group" id="form-group-div">
	                <input class="form-control category-input" placeholder="Food" type="text" id="category-input" autocomplete="off"/>
	            </div>
	          </form>
	        </div>
	      </div>
      	)
	}
}

export default CategoryForm;