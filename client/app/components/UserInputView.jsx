import React from 'react';
import PropTypes from 'prop-types';

class UserInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handleChange(e) {
    // console.log(e.target.value)
    this.setState({ userInput: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.userInput} onChange={e => this.handleChange(e)} />
        <button onClick={() => this.props.userInputClick(this.state.userInput)} >Send</button>
      </div>
    );
  }
}

UserInputView.propTypes = {
  userInputClick: PropTypes.func.isRequired,
};

export default UserInputView;
