import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class RoomSearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: ['lobby'],
      newRoom: '',
    };
  }

  addNewRoomOnClick() {
    const roomsCopy = this.state.rooms.slice();
    roomsCopy.push(this.state.newRoom);
    this.setState({ rooms: roomsCopy, newRoom: '' });
  }

  render() {
    return (
      <div>
        <select onChange={e => this.props.handleRoomSelect(e.target.value)}>
          {
            this.state.rooms.map(item => <option value={item}>{item}</option>)
          }
        </select>
        <input type="text" onChange={e => this.setState({ newRoom: e.target.value })} />
        <button onClick={() => this.addNewRoomOnClick()} >Add Room</button>
      </div>
    );
  }
}

RoomSearchView.propTypes = {
  handleRoomSelect: PropTypes.func.isRequired,
};

export default RoomSearchView;
