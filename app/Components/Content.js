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
const PlayerIcon = require('./PlayerIcon');

type State = {
};

type Props = {
};

class Content extends React.Component<void, State, Props> {

  state: State;
  props: Props;

  static propTypes = {
  };

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps: Props) {

  }

  getFieldContent() {
    const fieldContent = [];
    const playersData = SampleData.manUtdPlayersData();
    for (var i=0; i < playersData.length; i++) {
      fieldContent.push(
        <PlayerIcon
          key={playersData[i].name}
          name={playersData[i].name}
          position={playersData[i].position}
        />
      );
    }
    return fieldContent;
  }

  render() {
    return (
      <div id="container">
  			<div id="field" ref="field">
          {this.getFieldContent()}
  			</div>
  		</div>
	  );
  }

}

module.exports = Content;
