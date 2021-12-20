// let hasDriverLicense = false
// const passTest = true

// if (passTest) hasDriverLicense = true
// if (hasDriverLicense) console.log("i can drive")

// const interface = "Audio"
// const private = 534

// function logger() {
//   console.log("my name is Yusob")
// }

// //calling /running /invoking function
// logger()
// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

//function decleration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah
// }
// const age1 = calcAge1(1987)

// //function expression
// const calcAge2 = function (birthyeah) {
//   return 2037 - birthyeah
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2)
// const calcAge2 = function (birthyeah) {
//   return 2037 - birthyeah
// }

// const calcAge3 = (birthyeah) => 2037 - birthyeah
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntilRetirement = (birthyeah, firstName) => {
//   const age = 2037 - birthyeah
//   const retirement = 65 - age
//   return `${firstName} retires in ${retirement} Years`
// }
// console.log(yearsUntilRetirement(1987, "Yusob"))
// console.log(yearsUntilRetirement(1991, "yultuz"))

//function inside in a function

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)
//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of  oranges.`
//   return juice
// }

// console.log(fruitProcessor(2, 3))

// const calcaAge = function (birthYeah) {
//   return 2037 - birthYeah
// }

// const yearsUntilRetirement = function (birthyeah, firstName) {
//   const age = calcaAge(birthyeah)
//   const retirement = 65 - age

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} Years`)
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired   `)
//     return -1
//   }

//   // return `${firstName} retires in ${retirement} Years`
// }
// console.log(yearsUntilRetirement(1991, "Yusob"))
// console.log(yearsUntilRetirement(1950, "Yacob"))

// const friend1 = "Micheal"
// const friend2 = "Steven"
// const friend3 = "Peter"

// const friends = ["Micheal", "Steven", "Peter"]
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends.length)
// console.log(friends[friends.length - 1])
// friends[2] = "Jay"
// console.log(friends)

// const firstName = "Jonas"
// const jonas = ["Jonas", "Schmedtmann", 2017 - 1991, "teacher", friends]
// console.log(jonas)

// //Exercise
// const calcAge = function (birthyeah) {
//   return 2037 - birthyeah
// }
// const years1 = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years1[0])
// const age2 = calcAge(years1[1])
// const age3 = calcAge(years1[years1.length - 1])
// console.log(age1, age2, age3)

// const ages = [
//   calcAge(years1[0]),
//   calcAge(years1[1]),
//   calcAge(years1[years1.length - 1]),
// ]
// console.log(ages)
// const friends = ["Micheal", "Steven", "Peter"]

// //add elements
// const newLength = friends.push("Jay")
// console.log(friends)
// console.log(newLength)

// friends.unshift("John")
// console.log(friends)

// //remoce elemenst
// friends.pop() //last
// friends.pop() //last
// console.log(friends)

// friends.shift() //first
// console.log(friends)

// console.log(friends.indexOf("Steven"))
// console.log(friends.indexOf("Bob"))

// friends.push(23)
// console.log(friends.includes("Steven"))
// console.log(friends.includes("Bob"))
// console.log(friends.includes(23))

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Steven")
// }

// const jonasArray = [
//   "Jonas",
//   "Yacob",
//   2037 - 1991,
//   "programmer",
//   ["Micheal", "Peter", "Steven"],
// ]

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Yacob",
//   age: 2037 - 1991,
//   job: "Programmer",
//   friends: ["Micheal", "Peter", "Steven"],
// }

// console.log(jonas.lastName)

// const nameKey = "Name"
// console.log(jonas["first" + nameKey])
// console.log(jonas["last" + nameKey])

// const interestedIn = prompt(
//   "What do you want to know abour Jonas ? Choose between firstName,lastName ,age ,job and friends"
// )
// jonas.location = "Portugal"
// jonas["Twitter"] = "@parguzatt"
// console.log(jonas[interestedIn])

// jonas.bastFriend = "Michael"
// console.log(jonas[interestedIn])

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// )

//  object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Yacob",
//   birthYear: 1991,
//   job: "Programmer",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     return 2037 - this.birthYear
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -year old ${
//       jonas.job
//     },and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
//   },
// }
// console.log(jonas.calcAge())

// //challenge
// //"Jonas is a 46-year old teacher , and he has a  driver's licence"
// console.log(jonas.getSummary())

// for loo[ keeps runnig while condition is true]
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }
// const jonas = [
//   "Jonas",
//   "Yacob",
//   1991,
//   "Programmer",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ]
// const types = []

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i])
//   // types[i] = typeof jonas[i]
//   types.push(typeof jonas[i])
// }
// console.log(types)

// const years = [1987, 1991, 1964, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }
// console.log(ages)

//continue and break
