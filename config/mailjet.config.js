const dotenv = require('dotenv');

dotenv.config();

const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);

const sendEmail = (Messages) => {
  console.log(':: mailjet.js :: Message to be sent [%o]', Messages);
  return new Promise((resolve, reject) => {
    mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages,
        // SandBoxMode: process.env.MAILJET_SANDBOX_MODE === 'true' ? true : false,
      })
      .then(({ response: { status } }) => {
        console.log(':: mailjet.js :: message successfully sent [%o]', status);
        resolve(status);
      })
      .catch((error) => {
        console.log(':: mailjet.js :: error sending mail ', error);
        reject(error);
      });
  });
};

module.exports = sendEmail;
