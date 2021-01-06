const customersModel = require('../models').Customer;

const createCustomer = (req, res) => {
  let newCustomer = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      creditCardNumber: req.body.creditCardNumber
  };
  customersModel.create(newCustomer).then(
      customer => res.json(customer)
  );
}

const getAllCustomers = (req, res) => {
  customersModel.findAll().then(
      customer => res.json(customer)
  );
}

module.exports = {
  createCustomer,
  getAllCustomers
}