import React from 'react';
import {connect} from 'react-redux';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.DeleteRecipe = this.DeleteRecipe.bind(this);
    this.EditRecipe = this.EditRecipe.bind(this);
  }

  DeleteRecipe(e) {
    const elementId = $(e.target)[0].closest('.recipe__item').id;
    this.props.onDeleteRecipe(elementId);
  }

  EditRecipe(e) {
    const elementId = $(e.target)[0].closest('.recipe__item').id;
    this.props.onEditRecipe(elementId);
  }

  componentDidUpdate() {
    const popup = document.querySelector('.recipe__popup.-edit');
    this.props.recipeBox.editPopup.isOpen ? popup.classList.add('-visible') : popup.classList.remove('-visible');
  }

  render() {
    return (
      this.props.recipeBox.recipes.map((item, i) =>
        <div key={i} id={i} className='recipe__item'>
          <input type="checkbox" id={"recipe-item-"+ i} name='recipe-item'/>
          <label htmlFor={"recipe-item-"+ i} className='recipe__name'>{item.name}</label>
          <div className='recipe__content'>
            <h2 className='head-line'>Ingredients</h2>
            <ul className='recipe__ingredients'>
              {item.ingredients.map((el, index) =>
                <li key={index} className='recipe__ingredient'>{el}</li>
              )}
            </ul>
            <footer className='ercipe__controls'>
              <button className='button -red' onClick={this.DeleteRecipe}>Delete</button>
              <button className='button' onClick={this.EditRecipe}>Edit</button>
            </footer>
          </div>

        </div>
      )
    );
  }
}

export default connect(
  state => ({ // MapStateToProps

    recipeBox: state.recipeBox

  }),
  dispatch => ({
    onDeleteRecipe: id => {
      dispatch({
        type: 'DELETE_RECIPE',
        idRecipe: id
      });
    },
    onEditRecipe: id => {
      dispatch({
        type: 'TOGGLE_EDIT_POPUP',
        idOfTargetElement: id
      });
    }
  })
)(Recipe);