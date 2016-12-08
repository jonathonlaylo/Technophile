const extend = require('./extend');

function Phone(phoneNumber){
  this.phoneNumber = phoneNumber;
  // this.otherPhoneNumber = otherPhoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber){
  return this.phoneNumber + ' calls ' + phoneNumber;
};

module.exports = Phone;