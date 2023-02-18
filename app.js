const bsv = require('bsv');
const inquirer = require('inquirer');
const Mnemonic = require('bsv-mnemonic');

inquirer
  .prompt([
    {
      type: 'password',
      message: 'Enter your private key:',
      name: 'privKey',
      mask: '*',
    },
  ])
  .then((answers) => {
    const privKey = bsv.PrivateKey.fromString(answers.privKey);
    const seed = Mnemonic.fromSeed(privKey.toBuffer(), Mnemonic.Words.ENGLISH).toString();
    console.log('Seed phrase:', seed.toString());
  });
