const initialState = {
  recentTopUsers: [],
  allTimeTopUsers: [],
  recentTopUsersView: false

};

export default function leaderBoard(state = initialState, action) {
  if (action.type === 'LOAD_RECENT_TOP_USERS') {
    return Object.assign({}, state, {
      recentTopUsers: [
        ...action.arrayOfTopUsers
      ]
    });
  } else if (action.type === 'LOAD_ALL_TIME_TOP_USERS') {
    return (
      Object.assign({}, state, {
        allTimeTopUsers: [
          ...action.arrayOfTopUsers
        ]
      })
    );
  } else if (action.type === 'RECENT_TOP_USERS_VIEW') {
    return (
      Object.assign({}, state, {recentTopUsersView: true})
    );
  } else if (action.type === 'ALL_TIME_TOP_USERS_VIEW') {
    return (
      Object.assign({}, state, {recentTopUsersView: false})
    );
  }

  return state;
}