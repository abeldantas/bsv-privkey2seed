const inquirer = require('inquirer');
const bsv = require('bsv');
const bip39 = require('bip39');

const questions = [
  {
    type: 'input',
    name: 'privateKey',
    message: 'Enter your private key:'
  }
];

inquirer.prompt(questions)
  .then(answers => {
    const privateKey = bsv.PrivateKey.fromString(answers.privateKey);
    const seedPhrase = bip39.entropyToMnemonic(privateKey.toBuffer());
    console.log('Your BIP39 seed phrase is:', seedPhrase);
  })
  .catch(error => console.error(error));
