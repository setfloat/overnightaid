'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    email: Joi.string()
      .email()
      .label('Email')
      .max(255)
      .min(3)
      .required()
      .trim(),
    password: Joi.string()
      .label('Password')
      .max(255)
      .min(8)
      .required()
      .trim()
  }
};
