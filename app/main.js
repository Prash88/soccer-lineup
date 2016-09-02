require("./Assets/style.scss")

var React = require('react');
import ReactDom from 'react-dom';

var App = require('./App.js');

ReactDom.render(<App/>, document.getElementById('appContainer'));
