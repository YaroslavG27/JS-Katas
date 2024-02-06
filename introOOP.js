// Create a house object with the properties:

// house = {
//     rooms: 2,
//     windows: 2,
//     bathroom: 1,
//     material: 'stone'
// }

// Create a villa object with the properties:

// windows = 6
// material = 'stone'
// and a property livingroom with the following sub-properties:

// windows = 2
// doors = 1

// let villa = {
//     windows: 6,
//     material: 'stone',
//     livingRoom: {
//         windows: 2,
//         doors: 1
//     }
// }
// console.log(villa)

// The following object is incorrect, fix it:

// let team = {
//     name: 'Spartans',
//     speed: 90
// }
// console.log(team);

// Create a function countWindows that counts, then returns, the total number of windows in the house parameter object, by accessing each room's windows:

// let house = {
//     livingRoom: {
//       windows: 4
//     },
//     bedroom: {
//       windows: 2
//     },
//     kitchen: {
//       windows: 1
//     }
//   }

//   function countWindows(house){
//     return house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows
//   }

//   console.log(countWindows(house));