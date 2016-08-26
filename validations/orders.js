'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    address: {
      addressLine1: Joi.string()
        .label('Address Line 1')
        .required()
        .max(255)
        .trim(),
      addressLine2: Joi.string()
        .label('Address Line 2')
        .max(255)
        .optional()
        .trim(),
      addressCity: Joi.string()
        .label('City')
        .max(255)
        .required()
        .trim(),
      addressState: Joi.string()
        .label('State')
        .length(2)
        .required()
        .trim(),
      addressZip: Joi.string()
        .label('Zipcode')
        .min(5)
        .max(10)
        .required()
        .trim()
    }
  }
};
