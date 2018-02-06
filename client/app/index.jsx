import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import $ from 'jquery';
import PropTypes from 'prop-types';
import UserNameInputView from './components/UserNameInputView';
import UserInputView from './components/UserInputView';
import RoomSearchView from './components/RoomSearchView';
import ChatContainerView from './components/ChatContainerView';
import SERVER_API from './network_config';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messages: [],
      userInput: '',
      currentRoom: 'lobby',
    };
    this.handleUserInputClick = this.handleUserInputClick.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
    this.handleRoomSelect = this.handleRoomSelect.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.postUserMessage = this.postUserMessage.bind(this);
  }

  componentDidMount() {
    this.getUserMessages(this.updateMessages);
    setInterval(() => this.getUserMessages(this.updateMessages), 4000);
  }

  /*
  handleClick(variable, value) {
    this.setState({variable: value})
  }
  */
  getUserMessages(callBack) {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:3000/classes/messages',
      success(data) {
        callBack(data);
      },
      error(data) {
        console.log('failure', data);
      },
    });
  }

  handleRoomSelect(room) {
    this.setState({ currentRoom: room });
  }

  handleUsernameClick(name) {
    this.setState({ username: name });
  }

  handleUserInputClick(message) {
    this.setState({ userInput: message }, this.postUserMessage);
  }

  postUserMessage() {
    const message = {
      username: this.state.username,
      text: this.state.userInput,
      roomname: this.state.currentRoom,
    };
    $.ajax({
      type: 'POST',
      headers: SERVER_API,
      url: 'http://127.0.0.1:3000/classes/messages',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success() {
      },
      error(data) {
        console.log('failure', data);
      },
    });
  }

  updateMessages(data) {
    this.setState({ messages: data.results });
  }


  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="UNIV-container">
            {this.state.username }
            { this.state.username === '' ? <UserNameInputView userNameClick={this.handleUsernameClick} /> : null }
          </div>
          <div className="UIV-container">
            <UserInputView userInputClick={this.handleUserInputClick} />
          </div>
          <div className="RSV-container">
            Room Search
            {this.state.currentRoom}
            <RoomSearchView handleRoomSelect={this.handleRoomSelect} />
          </div>
        </div>
        <div className="CCV-container">
          <h1 className="chatViewHeader">Chat View</h1>
          <ChatContainerView
            messages={this.state.messages}
            room={this.state.currentRoom}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
