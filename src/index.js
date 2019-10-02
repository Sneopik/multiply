module.exports = function multiply(first, second) {

  let res;
  let i = 0;
  let j = 0;
  let arr = [];
  let ron; //the rest of the number
  let n;

  first = first.split('').reverse()
  second = second.split('').reverse()
  
  for (i=0;i<second.length;i++)
  {
    for (j=0;j<first.length;j++){
      res = first[j]*second[i];
      if (arr[i+j])
        arr[i+j]+=res;
      else 
        arr[i+j]=res;
    }
  }
  
  for (i=0;i<arr.length;i++){
    n = arr[i]%10;
    ron = Math.floor(arr[i]/10);
    arr[i]=n;

    if(arr[i+1])
      arr[i+1]+=ron;
    else if (ron!=0)
      arr.push(ron);
  }

  arr = arr.reverse().join('');

  return arr;
}
