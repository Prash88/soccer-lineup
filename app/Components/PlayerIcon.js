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

type State = {
  draggableName: string,
};

type Props = {
  name: string,
  position: string,
};

class PlayerIcon extends React.Component<void, State, Props> {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
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
    //console.log(ui.y + ' ' + ui.x);
    //let { clientHeight, clientWidth } = this.refs.field;
    //console.log(clientHeight, clientWidth);
    var rect = this.refs[name];
    //console.log(rect.offsetTop, rect.offsetLeft);
    //console.log(ui.y + rect.offsetTop, ui.x + rect.offsetLeft);
    //242, 396
    //80.5 ,66
    /*console.log(
      Math.ceil((ui.y + rect.offsetTop)/66) + ', ' +
      Math.ceil((ui.x + rect.offsetLeft)/88.5)
    );*/
    const yRank = Math.ceil((ui.y + rect.offsetTop)/66);
    const xRank = Math.ceil((ui.x + rect.offsetLeft)/88.5)
    this.setState({
      draggableName: DragUtil.getPosition(xRank, yRank),
    });
  }

  render() {
    const number = (this.state.draggableName !== '')
                    ? this.state.draggableName
                    : this.props.position.toUpperCase();
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
          <div id="name">{this.props.name}</div>
        </div>
      </Draggable>
    );
  }

}

module.exports = PlayerIcon;
