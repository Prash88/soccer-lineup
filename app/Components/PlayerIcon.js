/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule PlayerIcon
 */
'use strict';

const React = require('react');
const Draggable = require('react-draggable');
const DraggableCore = Draggable.DraggableCore;
const DragUtil = require('./DragUtil');
const SortableList = require('./SortableList');

type State = {
  draggableName: string,
};

type Props = {
  name: string,
  position: string,
  number: string,
  fieldWidth: number,
  fieldHeight: number,
};

class PlayerIcon extends React.Component<void, State, Props> {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    number: React.PropTypes.string.isRequired,
    fieldWidth: React.PropTypes.number.isRequired,
    fieldHeight: React.PropTypes.number.isRequired,
  };

  constructor() {
    super();
    this.state = {
      draggableName: '',
    };
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps: Props) {

  }

  handleDrag(e, ui, name) {
    const verticalSplit = 3;
    const horizontalSplit = 6;
    const fieldHeight = this.props.fieldHeight - 30;
    const fieldWidth = this.props.fieldWidth - 30;
    const rect = this.refs[name];
    const regionHeight = (fieldHeight / horizontalSplit);
    const regionWidth = (fieldWidth / verticalSplit);
    let yRank = (ui.y + rect.offsetTop) / regionHeight;
    let xRank = (ui.x + rect.offsetLeft) / regionWidth;
    yRank = Math.ceil(yRank);
    xRank = Math.ceil(xRank);
    this.setState({
      draggableName: DragUtil.getPosition(xRank, yRank),
    });
  }

  render() {
    const number = (this.state.draggableName !== '')
                    ? this.state.draggableName
                    : this.props.number;
    return (
      <Draggable
        key={this.props.name}
        bounds="parent"
        onDrag={(e, ui) => this.handleDrag(e, ui, this.props.name)}>
        <div id={this.props.position} ref={this.props.name} className="draggable">
          <div id="circle">
            <div id="small-circle">
            </div>
            <div id="number">{number}</div>
          </div>
          <SortableList data={{items : [this.props.name, 'test']}} />
        </div>
      </Draggable>
    );
  }

}

module.exports = PlayerIcon;
