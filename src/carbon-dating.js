import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity ) {
  let regexp=/^[0-9]{1,2}([.][0-9]+)?$/
  if(!regexp.test(sampleActivity) || Number(sampleActivity)<=0 || typeof(sampleActivity)!="string") return false;
  let k=0.693/HALF_LIFE_PERIOD;
  let t=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  if(t<0)
  return false;
  return t;
};
