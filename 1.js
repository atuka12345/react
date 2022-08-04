// 1)

const numbers = [1,-3,45,-65,892,-912,54,-888],

 positivenumbers = numbers.filter((num) => num > 0),
 sum =positivenumbers.reduce(function(a,b){return a + b;});

console.log(sum)