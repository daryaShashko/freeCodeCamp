import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {getState} from 'redux-localstore';
import recipeBox from '../../../reducers/recipeBox';

class EditRecipePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.EditRecipe = this.EditRecipe.bind(this);
  }

  EditRecipe() {
    const nameRecipe = document.querySelector('input[name="editTitle"]').value;
    const ingredients = document.querySelector('input[name="editIngredients"]').value.split(',');

    this.props.onEditRecipe(nameRecipe, ingredients);

    document.querySelector('input[name="editTitle"]').value = '';
    document.querySelector('input[name="editIngredients"]').value = '';
  }

  componentWillUpdate(nextProps, nextState) {
    const state = getState();

    localStorage.setItem('recipes', JSON.stringify(state.recipeBox.recipes));
  }


  componentDidUpdate() {
    const popup = document.querySelector('.recipe__popup.-edit');

    this.props.recipeBox.editPopup.isOpen ? popup.classList.add('-visible') : popup.classList.remove('-visible');
  }

  render() {
    return (
      <div className='recipe__popup -edit'>
        <div className="recipe__popup-wrapper">
          <header className='recipe__popup-header'>
            <h2>Edit a Recipe</h2>
          </header>
          <form className='recipe__popup-content'>
            <label htmlFor='editTitle'>First Name</label>
            <Field name='editTitle'
                   component='input'
                   type='text'/>
            <label htmlFor='editIngredients'>Last Name</label>
            <Field name='editIngredients'
                   component='input'
                   type='text'
                   ref={input => {
                     this.ingredientsRecipe = input;
                   }}/>
          </form>
          <footer className='recipe__popup-footer'>
            <button className='button -green' onClick={this.EditRecipe}>Edit recipe</button>
            <button className='button' onClick={this.props.CloseEditPopup}>Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

EditRecipePopup = reduxForm({
  // A unique name for the form
  form: 'contact',
  enableReinitialize: true
})(EditRecipePopup);

EditRecipePopup = connect(
  state => ({ // MapStateToProps
    recipeBox: state.recipeBox,
    initialValues: {
      editTitle: state.recipeBox.editPopup.isOpen ? state.recipeBox.recipes[state.recipeBox.editPopup.idOfTargetElement].name : '',
      editIngredients: state.recipeBox.editPopup.isOpen ? state.recipeBox.recipes[state.recipeBox.editPopup.idOfTargetElement].ingredients : ''
    }
  }),
  dispatch => ({
    onEditRecipe: (name, ingredients) => {
      dispatch({
        type: 'EDIT_RECIPE',
        name,
        ingredients
      });
      dispatch({type: 'TOGGLE_EDIT_POPUP'});
    },
    CloseEditPopup: () => {
      dispatch({type: 'TOGGLE_EDIT_POPUP'});
    },
    onAddRecipe: (name, ingredients) => {
      dispatch({
        type: 'ADD_RECIPE',
        name,
        ingredients
      });
    }
  })
)(EditRecipePopup);

export default EditRecipePopup;