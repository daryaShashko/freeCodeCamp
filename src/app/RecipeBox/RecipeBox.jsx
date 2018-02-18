import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Recipe from './components/Recipe';
import AddRecipePopup from './components/AddRecipePopup';
import EditRecipePopup from './components/EditRecipePopup';


class RecipeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='content-wrapper'>
        <Link to='/' className='link-item -back'>Back</Link>
        <h1>Recipe box</h1>
        <div className='recipe__wrapper'>
          <Recipe/>
        </div>

        <button className='button -green' onClick={this.props.OpenAddPopup}>Add Recipe</button>

        <AddRecipePopup/>
        <EditRecipePopup/>
      </div>
    );
  }
}

export default connect(
  state => ({ // MapStateToProps
    recipeBox: state.recipeBox
  }),
  dispatch => ({
    OpenAddPopup: () => {
      dispatch({type: 'TOGGLE_ADD_POPUP'});
    }
  })
)(RecipeBox);