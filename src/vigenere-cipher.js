const CustomError = require("../extensions/custom-error");

const ALPHABETS_AMOUNT = 26;
const CODE_OF_FIRST_LETTER = 65;

class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    return this.transformMessage(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    return this.transformMessage(encryptedMessage, key, 'decrypt');
  }
  transformMessage(message, key, type) {
    if (message == undefined || key == undefined) {
      throw new Error('Not all required arguments were passed');
    }
    const keyStr = key.toUpperCase();
    let keyShift = 0;
    const symbols = message.toUpperCase().split('').map((val, ind) => {
      const messageCharCode = val.charCodeAt(0) - CODE_OF_FIRST_LETTER;
      const keyCharCode = keyStr[keyShift].charCodeAt(0) - CODE_OF_FIRST_LETTER;
      let result = val;
      if (messageCharCode >= 0 && messageCharCode < ALPHABETS_AMOUNT) {
        switch(type) {
          case 'encrypt':
            result = String.fromCharCode((messageCharCode + keyCharCode) % ALPHABETS_AMOUNT + CODE_OF_FIRST_LETTER);
            break;
          case 'decrypt':
            result = String.fromCharCode((messageCharCode + ALPHABETS_AMOUNT - keyCharCode) % ALPHABETS_AMOUNT + CODE_OF_FIRST_LETTER);
            break;
        }
        keyShift = (keyShift + 1) % keyStr.length;
      }
      return result;
    });
    if (!this.direct) {
      symbols.reverse();
    }
    return symbols.join('');
  }
}

module.exports = VigenereCipheringMachine;
