'use strict';
const {  Model } = require('sequelize');
const cryptodb = require('../helpers/crypto');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    creditCardNumber: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (Customer, options) => {
        if(typeof Customer.creditCardNumber !== "undefined"){
          Customer.creditCardNumber = cryptodb.encryptData(Customer.creditCardNumber);
        }
        return Customer;
      },
      afterFind: (Customer, options) => {
          if(Customer.constructor === Array) {
            var arrayLength = Customer.length;
            for (var i = 0; i < arrayLength; i++) {
              if(typeof(Customer[i].creditCardNumber) !== "undefined"){
                Customer[i].creditCardNumber = cryptodb.decryptData(Customer[i].creditCardNumber);
              }
            }
          } else {
              if(typeof Customer.creditCardNumber !== "undefined"){
                Customer[i].creditCardNumber = cryptodb.decryptData(Customer[i].creditCardNumber);
              }
          }
        return Customer;
      },
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};