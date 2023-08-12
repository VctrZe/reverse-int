module.exports = function reverse(n) {
  const num = Math.abs(n);
  const arr = num.toString().split('');
  let tmp
  for (let i = 0; i < arr.length / 2; i++) {         // 678439
    tmp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = tmp
  }

  return Number(arr.join(''));
}
