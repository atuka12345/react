// 2)

const counts = {};
const names = ['ilia', 'merabi', 'saba', 'merabi', 'merabi','saba'];
names.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
