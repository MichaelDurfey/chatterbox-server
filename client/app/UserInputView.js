import React from 'react';

class UserInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  render() {
    return (
      <div className='container'>
        <input type='text' value={this.state.userInput} onChange={(e) => { this.setState({ userInput: e.target.value }) }}/>
        <button>Send</button>
      </div>
    );
  }
}

export default UserInputView;
