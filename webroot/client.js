var React = require('./libs/React');
var HelloWorld = require('./hello-world');

var content = document.getElementById('content');
React.render(<HelloWorld />, content);
