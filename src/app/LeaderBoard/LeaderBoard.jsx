import React from 'react';
import {Link} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import {connect} from 'react-redux';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sortByRecent = this.sortByRecent.bind(this);
    this.sortByAllTime = this.sortByAllTime.bind(this);
  }

  sortByRecent(e) {
    const allTimeButton = document.querySelector('.button.-all-time');

    allTimeButton.classList.remove('-active');
    e.target.classList.add('-active');
    this.props.onRecentButtonClick();
  }

  sortByAllTime(e) {
    const recentButton = document.querySelector('.button.-recent');

    recentButton.classList.remove('-active');
    e.target.classList.add('-active');
    this.props.onAllTimeButtonClick();
  }

  componentWillMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then(arrayOfTopUsers =>
        this.props.onLoadRecentTopUsers(arrayOfTopUsers)
      );

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => response.json())
      .then(arrayOfTopUsers =>
        this.props.onLoadAllTimeTopUsers(arrayOfTopUsers)
      );
  }

  componentDidMount() {
    const recentButton = document.querySelector('.button.-recent');
    const allTimeButton = document.querySelector('.button.-all-time');

    this.props.leaderBoard.recentTopUsersView ? recentButton.classList.add('-active') : allTimeButton.classList.add('-active');
  }

  render() {
    return (
      <div className='content-wrapper'>

        <Link to='/' className='link-item -back'>Back</Link>

        <h1>Leaderboard</h1>
        <table className='leader-board'>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th><button className='button -recent' onClick={this.sortByRecent}>Points recent</button></th>
              <th><button className='button -all-time' onClick={this.sortByAllTime}>Points all</button></th>
            </tr>
          </thead>
          <tbody>

            {
              this.props.leaderBoard.recentTopUsersView
                ? this.props.leaderBoard.recentTopUsers.map((item, i) =>
                  <tr key={i}>
                    <td align="center">{i + 1}</td>
                    <td><span><img src={item.img} alt={item.username}/></span>{item.username}</td>
                    <td align="center">{item.recent}</td>
                    <td align="center">{item.alltime}</td>
                  </tr>
                )
                : this.props.leaderBoard.allTimeTopUsers.map((item, i) =>
                  <tr key={i}>
                    <td align="center">{i + 1}</td>
                    <td><span><img src={item.img} alt={item.username}/></span>{item.username}</td>
                    <td align="center">{item.recent}</td>
                    <td align="center">{item.alltime}</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>

    );
  }
}


export default connect(
  state => ({ // MapStateToProps
    leaderBoard: state.leaderBoard
  }),
  dispatch => ({
    onLoadRecentTopUsers: arrayOfTopUsers => {
      dispatch({
        type: 'LOAD_RECENT_TOP_USERS',
        arrayOfTopUsers
      });
    },
    onLoadAllTimeTopUsers: arrayOfTopUsers => {
      dispatch({
        type: 'LOAD_ALL_TIME_TOP_USERS',
        arrayOfTopUsers
      });
    },
    onRecentButtonClick: () => {
      dispatch({type: 'RECENT_TOP_USERS_VIEW'});
    },
    onAllTimeButtonClick: () => {
      dispatch({type: 'ALL_TIME_TOP_USERS_VIEW'});
    }
  })
)(LeaderBoard);