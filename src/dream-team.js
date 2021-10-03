import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members))
  return false;
  if(members.length==0 )
  return false;
  let res='';
   let regexp=/[A-z]/;
   members.forEach(element => {
     if(typeof(element)=="string"){
     let char=element.match(regexp);
     res+=char[0];
     }
   });
   if(res.length==0)
   return false;
   return  res.toUpperCase().split('').sort().join('');
};