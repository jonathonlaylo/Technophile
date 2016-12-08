const extend = require('./extend');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');


function NintendoDS(systemName) {
  GameConsole.call(this, 'Nintendo DS');
  WebBrowser.call(this);
}

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;