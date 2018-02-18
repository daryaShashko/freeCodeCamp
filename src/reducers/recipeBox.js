import {defineState} from 'redux-localstore';

const defaultState = {
  recipes: [
    {
      name: 'Baked Salmon',
      ingredients: ['Salmon', 'Pine Nuts', 'Butter Lettuce', 'Yellow Squash', 'Olive Oil', 'Garlic']
    },{
      name: 'Fish Tacos',
      ingredients: ['Salmon', 'Pine Nuts', 'Butter Lettuce', 'Yellow Squash', 'Olive Oil', 'Garlic']
    }
  ],
  editPopup: {
    isOpen: false,
    idOfTargetElement: ''
  },
  addPopup: {isOpen: false}

};

const initialState = defineState(defaultState)('recipeBox');

export default function recipeBox(state = initialState, action) {
  if (action.type === 'ADD_RECIPE') {
    return Object.assign({}, state, {
      recipes: [
        ...state.recipes,
        {
          name: action.name,
          ingredients: action.ingredients
        }
      ]
    });
  } else if (action.type === 'EDIT_RECIPE') {
    return (
      Object.assign({}, state, {
        recipes: [
          ...[...state.recipes].filter((el, id) => id !== Number(state.editPopup.idOfTargetElement)),
          {
            name: action.name,
            ingredients: action.ingredients
          }
        ]
      }));
  } else if (action.type === 'TOGGLE_EDIT_POPUP') {
    return (
      action.idOfTargetElement !== undefined ? Object.assign({}, state, {
        editPopup: Object.assign({}, state.editPopup, {
          isOpen: !state.editPopup.isOpen,
          idOfTargetElement: action.idOfTargetElement
        })
      }) : Object.assign({}, state, {editPopup: Object.assign({}, state.editPopup, {isOpen: !state.editPopup.isOpen})})
    );
  } else if (action.type === 'TOGGLE_ADD_POPUP') {
    return Object.assign({}, state, {addPopup: Object.assign({}, state.addPopup, {isOpen: !state.addPopup.isOpen})});
  } else if (action.type === 'DELETE_RECIPE') {
    return Object.assign({}, state, {recipes: [...state.recipes].filter((el, id) => id !== Number(action.idRecipe))});
  }

  return state;
}