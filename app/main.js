require("./Assets/style.scss")

const React = require('react');
import ReactDom from 'react-dom';

const App = require('./App.js');

ReactDom.render(<App/>, document.getElementById('appContainer'));
