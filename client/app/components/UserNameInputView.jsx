import React from 'react';
import PropTypes from 'prop-types';

class UserNameInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <div>
        <p>Username:</p>
        <input type="text" value={this.state.username} onChange={(e) => { this.setState({ username: e.target.value }); }} />
        <button onClick={() => this.props.userNameClick(this.state.username)}> Button </button>
      </div>
    );
  }
}

UserNameInputView.propTypes = {
  userNameClick: PropTypes.func.isRequired,
};

export default UserNameInputView;
