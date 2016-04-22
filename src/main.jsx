var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" headingColor="red"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To-Do" />, document.getElementById('To-Do'));
ReactDOM.render(<ListManager title="Christmas" headingColor="orange"/>, document.getElementById('Christmas'));