const React = require('react');
const Draggable = require('react-draggable');
const DraggableCore = Draggable.DraggableCore;
const SampleData = require('./SampleData');

module.exports = React.createClass({
  displayName: 'Content',

  getInitialState: function() {
  	return { serverData: null };
  },

  refreshData: function() {
  	// replace this with your favourite library for doing ajax calls
  	var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/currentTime', true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      this.setState({ serverData: data.time });
    };
    xhr.send();
  },

  render: function () {
    const fieldContent = [];
    SampleData.manUtdPlayersData().forEach(
      function (player) {
        fieldContent.push(
          <Draggable bounds="parent">
            <div id={player.position} className="draggable">
              <div id="circle">
                <div id="small-circle">
                </div>
                <div id="number">{player.position.toUpperCase()}</div>
              </div>
              <div id="name">{player.name}</div>
            </div>
          </Draggable>
        );
      }
    );
    return (
      <div id="container">
  			<div id="field">
          {fieldContent}
  			</div>
  		</div>
	);
  }

});
