/**
 * Copyright 2016-present Hokage. All Rights Reserved.
 *
 * @providesModule SortableList
 */
'use strict';
import React from 'react';
import { Sortable } from 'react-sortable';

var ListItem = React.createClass({
  displayName: 'SortableListItem',
  render: function() {
    const children = this.props.children.split(',');
    const divId = (parseInt(children[1], 10) > 0) ? 'name1' : 'name';
    return (
      <div {...this.props} id={divId} className="list-item">{children[0]}</div>
    )
  }
})

var SortableListItem = Sortable(ListItem);

var SortableList = React.createClass({

  getInitialState: function() {
    return {
      draggingIndex: null,
      data: this.props.data
    };
  },

  updateState: function(obj) {
    this.setState(obj);
  },

  render: function() {
    var childProps = { className: 'myClass1' };
    var listItems = this.state.data.items.map(function(item, i) {
      return (
        <SortableListItem
          key={i}
          updateState={this.updateState}
          items={this.state.data.items}
          draggingIndex={this.state.draggingIndex}
          sortId={i}
          outline="list"
          childProps={childProps}
          >{item+','+i}</SortableListItem>
      );
    }, this);

    return (
          <div id ='list' className="list">{listItems}</div>
    )
  }
});

module.exports = SortableList;
