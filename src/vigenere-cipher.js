import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor (switcher=true)
  {
    this.switcher=switcher;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    string=string.toUpperCase().split("");
    key=key.toUpperCase().split("");
    let ind=0;
    let res=[];
    string.forEach(element => {
      if(/[A-Z]/.test(element))
      {
        res.push(alphabet[(alphabet.indexOf(element)+alphabet.indexOf(key[ind%key.length]))%26])
        ind++
      }
      else
      res.push(element);
    });
    return this.switcher ? res.join("") : res.reverse().join("");
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    string=string.toUpperCase().split("");
    key=key.toUpperCase().split("");
    let ind=0;
    let res=[];
    string.forEach(element => {
      if(/[A-Z]/.test(element))
      {
        res.push(alphabet[(alphabet.indexOf(element)+26-alphabet.indexOf(key[ind%key.length]))%26])
        ind++
      }
      else
      res.push(element);
    });
    return this.switcher ? res.join("") : res.reverse().join("");
  }
}
