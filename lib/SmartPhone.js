const extend = require('./extend');
const Phone = require('./Phone');
const Tablet = require('./Tablet');
const GameConsole = require('./GameConsole');
const WebBrowser = require('./WebBrowser');


function SmartPhone(phoneNumber, systemName) {
  Phone.call(this, phoneNumber);
  Tablet.call(this);
  GameConsole.call(this, 'Smart Phone');
  WebBrowser.call(this);
}

extend(SmartPhone, Phone);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;