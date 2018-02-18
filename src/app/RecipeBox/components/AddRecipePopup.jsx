import React from 'react';
import {connect} from 'react-redux';

class AddRecipePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.AddRecipe = this.AddRecipe.bind(this);
  }

  AddRecipe() {
    const nameRecipe = this.nameRecipe.value;
    const ingredients = this.ingredientsRecipe.value.split(',');

    this.props.onAddRecipe(nameRecipe, ingredients);

    this.nameRecipe.value = '';
    this.ingredientsRecipe.value = '';
  }

  componentDidUpdate() {
    const popup = document.querySelector('.recipe__popup.-add');

    this.props.recipeBox.addPopup.isOpen ? popup.classList.add('-visible') : popup.classList.remove('-visible');
  }

  render() {
    return (
      <div className='recipe__popup -add'>
        <div className="recipe__popup-wrapper">
          <header className='recipe__popup-header'>
            <h2>Add a Recipe</h2>
          </header>
          <div className='recipe__popup-content'>
            <label htmlFor='title'>Title</label>
            <input id='title' type='text' placeholder='Recipe name' ref={input => {
              this.nameRecipe = input;
            }}/>
            <label htmlFor='ingredients'>Ingredients</label>
            <input id='ingredients' type='text' placeholder='Enter ingredients separated by commas (,)' ref={input => {
              this.ingredientsRecipe = input;
            }} />
          </div>
          <footer className='recipe__popup-footer'>
            <button className='button -green' onClick={this.AddRecipe}>Add recipe</button>
            <button className='button' onClick={this.props.CloseAddPopup}>Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ // MapStateToProps

    recipeBox: state.recipeBox

  }),
  dispatch => ({
    onAddRecipe: (name, ingredients) => {
      dispatch({
        type: 'ADD_RECIPE',
        name,
        ingredients
      });
    },
    CloseAddPopup: () => {
      dispatch({type: 'TOGGLE_ADD_POPUP'});
    }
  })
)(AddRecipePopup);