const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = [];
    for (let i = 65; i < 91; i++) {
      this.alphabet.push(String.fromCharCode(i));
    }
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    };

    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageInd = [];
    let keyInd = [];

    for(let i = 0; i < message.length; i++){
      if(!this.alphabet.includes(message[i])){
        messageInd.push(message[i]);
      }
      else{
        messageInd.push(this.alphabet.indexOf(message[i]));
      }
    };

    for(let i = 0; i < key.length; i++){
      if(this.alphabet.includes(key[i])){
        keyInd.push(this.alphabet.indexOf(key[i]));
      }
    };

    let index = 0;

    for(let i = 0; i < messageInd.length; i++){
      if(typeof(messageInd[i]) === 'number'){
        messageInd[i] += keyInd[index];
          if(messageInd[i] > 25){
            messageInd[i] = this.alphabet[messageInd[i] - 26];
          }else{
            messageInd[i] = this.alphabet[messageInd[i]];
          }
        index++
          if(index === keyInd.length){
            index = 0;
          }
      }
    };

    return this.direct ? messageInd.join('') : messageInd.reverse().join('');
  }

  decrypt(encrMessage, key) {
    if(encrMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    };

    encrMessage = encrMessage.toUpperCase()
    key = key.toUpperCase()
    let messageInd = [];
    let keyInd = [];

    for(let i = 0; i < encrMessage.length; i++){
      if(!this.alphabet.includes(encrMessage[i])){
        messageInd.push(encrMessage[i]);
      }
      else{
        messageInd.push(this.alphabet.indexOf(encrMessage[i]));
      }
    };

    for(let i = 0; i < key.length; i++){
      if(this.alphabet.includes(key[i])){
        keyInd.push(this.alphabet.indexOf(key[i]));
      }
    };

    let index = 0;

    for(let i = 0; i < messageInd.length; i++){
      if(typeof(messageInd[i]) === 'number'){
        messageInd[i] = this.alphabet[(messageInd[i] - keyInd[index] + 26) % 26]
        index++
        if(index === keyInd.length){
          index = 0
        }
      }
    }

    return this.direct ? messageInd.join('') : messageInd.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
