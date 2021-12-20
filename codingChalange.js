//Challenge 1
// const calcAverage = (a, b, c) => (a + b + c) / 3
// console.log(calcAverage(10, 20, 30))
// //test 1
// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins Win 🏆 (${avgDolhins} vs. ${avgKoalas})`)
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Koalaas  Win 🏆 (${avgKoalas} vs. ${avgDolhins})`)
//   } else {
//     console.log("NO team wins....")
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// checkWinner(123, 23)

// //test 2
// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphins, scoreKoalas)
// checkWinner(scoreDolphins, scoreKoalas)

//Challenge 2

// const calcTip1 = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const calcTip2 = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

// const bills = [125, 555, 44]
// const tips = [calcTip1(bills[0]), calcTip1(bills[1]), calcTip1(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills)
// console.log(tips)
// console.log(totals)

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip1(bills[i])
  tips.push(tip)
  totals.push(tip + bills[i])
}
console.log(bills, tips, totals)

const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}
console.log(calcAverage([2, 3, 7]))
console.log(calcAverage(totals))
console.log(calcAverage(tips))
