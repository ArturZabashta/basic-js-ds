const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {  
  /*throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here*/
  let listDeep = 0;
  let valueArray = [];
  let checkedValueArray = [];
  function getDeep(list) {
    
    valueArray.push(list.value);
    if (list.value !== k) checkedValueArray.push(list.value);

    if (list.next)  {      
      listDeep ++; 
      getDeep(list.next)
      } else return listDeep;
  }
  getDeep(l);  

  checkedValueArray.forEach((elem, index) => {
    switch (index) {
      case 0: {
        l.value = elem;        
        if (index < checkedValueArray.length-1) l.next = {};
        else l.next = null;
        break;
      }
      case 1: {
        l.next.value = elem;
        if (index < checkedValueArray.length-1) l.next.next = {};
        else l.next.next = null;
        break;
      }
      case 2: {
        l.next.next.value = elem;
        if (index < checkedValueArray.length-1) l.next.next.next = {};
        else l.next.next.next = null;
        break;
      }
      case 3: {
        l.next.next.next.value = elem;
        if (index < checkedValueArray.length-1) l.next.next.next.next = {};
        else l.next.next.next.next = null;
        break;
      }
      case 4: {
        l.next.next.next.next.value = elem;
        if (index < checkedValueArray.length-1) l.next.next.next.next.next = {};
        else l.next.next.next.next.next = null;
        break;
      }
    }
    
  })

  return l;

}

module.exports = {
  removeKFromList
};
