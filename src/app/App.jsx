import React from 'react';
import {NavLink} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='row'>
        <div className='content-wrapper'>

          <h1 className="-center">FreeCodeCamp tasks</h1>

          <ul className="navigation">
            <li className="navigation__item">
              <NavLink to='/leaderBoard' className='navigation__link' activeClassName='-active'>LeaderBoard</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='/markdownPreviewer' className='navigation__link' activeClassName='-active'>MarkdownPreviewer</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='/RecipeBox' className='navigation__link' activeClassName='-active'>RecipeBox</NavLink>
            </li>
          </ul>

        </div>

        <div className='content-wrapper'>
          <div className="tasks">

            <div className="task">
              <header  className="task__header">
                <h4 className="task__name">Build a Camper Leaderboard</h4>
                <NavLink to='/leaderBoard' className='task__link' activeClassName='-active'>LeaderBoard</NavLink>
              </header>

              <div className="task__description">

                <ul className="task__list-points">
                  <li className="task__point">User Story: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.</li>
                  <li className="task__point">User Story: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.</li>
                  <li className="task__point">User Story: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.</li>
                  <li className="task__point">To get the top 100 campers for the last 30 days: <a href="https://fcctop100.herokuapp.com/api/fccusers/top/recent">https://fcctop100.herokuapp.com/api/fccusers/top/recent</a>.</li>
                  <li className="task__point">To get the top 100 campers of all time: <a href="https://fcctop100.herokuapp.com/api/fccusers/top/alltime">https://fcctop100.herokuapp.com/api/fccusers/top/alltime</a>.</li>
                </ul>

              </div>

            </div>

            <div className="task">
              <header className="task__header">
                <h4 className="task__name">Build a Markdown Previewer</h4>
                <NavLink to='/markdownPreviewer' className='task__link' activeClassName='-active'>MarkdownPreviewer</NavLink>
              </header>

              <div className="task__description">
                <ul className="task__list-points">
                  <li className="task__point">User Story: I can type GitHub-flavored Markdown into a text area.</li>
                  <li className="task__point">User Story: I can see a preview of the output of my markdown that is updated as I type.</li>
                  <li className="task__point">You don't need to interpret Markdown yourself - you can import the Marked library for <a href="this: https://cdnjs.com/libraries/marked">this: https://cdnjs.com/libraries/marked</a> </li>
                </ul>
              </div>

            </div>

            <div className="task">

              <header className="task__header">
                <h4 className="task__name">Build a Recipe Box</h4>
                <NavLink to='/RecipeBox' className='task__link' activeClassName='-active'>RecipeBox</NavLink>
              </header>

              <div className="task__description">

                <ul className="task__list-points">
                  <li className="task__point">User Story: I can create recipes that have names and ingredients.</li>
                  <li className="task__point">User Story: I can see an index view where the names of all the recipes are visible.</li>
                  <li className="task__point">User Story: I can click into any of those recipes to view it.</li>
                  <li className="task__point">User Story: I can edit these recipes.</li>
                  <li className="task__point">User Story: I can delete these recipes.</li>
                  <li className="task__point">User Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default App;