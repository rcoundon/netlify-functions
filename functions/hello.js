const _ = require('lodash');

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World';
  return {
    statusCode: 200,
    body: `Hello ${_.upperCase(subject)}!`
  };
};
