// const jonas = [
//   "Jonas",
//   "Yacob",
//   2037 - 1991,
//   "Programmer",
//   ["Micheal", "Peter", "Steven"],
// ]
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i])
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//   console.log(`----Starting exercise ${exercise}`)
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(` Exercise ${exercise} :lifting weight repetition ${rep}`)
//   }
// }
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }
// let rep = 1
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`)

//   rep++
// }
let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
  console.log(`You Rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log("Loop is about to end...")
}
