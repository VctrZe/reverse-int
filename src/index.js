module.exports = function reverse(n) {
  let nun = Math.abs(n);
  const str = nun.toString().split('');
  const length = str.length;
  let reversed = [];
  let result;
  
  for (let i = 0; i <= length; i++) {         // 678439
    
    reversed[i] = str[(length - i)];
    
    console.log(reversed)
    result = reversed.join('');
  }

  return result;
}
