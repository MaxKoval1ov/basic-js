import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr_init) {

  if (Array.isArray(arr_init)) {
    let arr=[];
    for(let i=0;i<arr_init.length;i++)
    {
      if(arr_init[i]=='--double-next')
      {
        if(i<arr_init.length-1)
        arr.push(arr_init[i+1]);
      }else if(arr_init[i]=='--double-prev'  )
      {
        if(i!=0 && arr_init[i-2]!="--discard-next")
        arr.push(arr_init[i-1]);
      }else if(arr_init[i]=='--discard-next')
      {
        i++;
      }else if(arr_init[i]=='--discard-prev' )
      {
      if(i>0 && arr_init[i-2] != '--discard-next')
       {
        arr.pop();
       }
      }
      else if(arr_init[i]!='--discard-prev' && arr_init[i]!='--discard-next' && arr_init[i]!='--double-prev' && arr_init!='--double-prev')
      {
      arr.push(arr_init[i]);
      }
    }
    return arr;
  } else throw new Error("'arr' parameter must be an instance of the Array!");
};
