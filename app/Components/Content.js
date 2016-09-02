/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule Content
 */
'use strict';

const React = require('react');
const Draggable = require('react-draggable');
const DraggableCore = Draggable.DraggableCore;
const SampleData = require('./SampleData');

class Content extends React.Component {

  handleDrag(e, ui) {
    //console.log(ui.x + ' ' + ui.y);
  }

  render() {
    const fieldContent = [];
    const playersData = SampleData.manUtdPlayersData();
    for (var i=0; i < playersData.length; i++) {
      const player = playersData[i];
      fieldContent.push(
        <Draggable
          key={player.name}
          bounds="parent"
          onDrag={(e, ui) => this.handleDrag(e, ui)}>
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
    return (
      <div id="container">
  			<div id="field">
          {fieldContent}
  			</div>
  		</div>
	  );
  }

}

module.exports = Content;
