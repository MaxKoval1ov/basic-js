import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if(date instanceof Date && date && Object.getOwnPropertyNames(date).length == 0)
  {
   let mounth = date.getMonth()

   if (mounth == 11 || mounth <=1){
     return 'winter';
   }
   if (mounth <= 4){
     return 'spring';
   }
   if (mounth <= 7){
     return 'summer';
   }
   if (mounth <= 10){
     return 'autumn';
   }
  }else if(date==undefined)
  return 'Unable to determine the time of year!';
  else
  throw new Error("Invalid date!");
 };
