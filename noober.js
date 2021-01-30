async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // declaring variables
  // let levelOfService = "testing level of service"
  // let passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
  // let passengerPhone = passengerDetails.phoneNumber
  // let passengerNumberOfPassengers = numberOfPassengers
  // let passengerPickupAddressLine1 = pickupLocation.address
  // let passengerPickupAddressLine2 = `${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip}`
  // let passengerDropoffAddressLine1 = dropoffLocation.address
  // let passengerDropoffAddressLine2 = `${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip}`



  for (let i = 0; i < json.length; i++) {   // calling the arrays
    let ride = json[i]

    for (let l = 0; l < ride.length; l++) { // calling the legs
      // console.log([l]);
      let leg = ride[l]
      let passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`

      console.log(passengerName);

    }


    // let rideleg = json[i][l]
    // // define level of service
    // // need to loop twice to get down to ride level 2 to determine purple requested and number of passengers
    // if (ride.length > 1) {   // if length of ride is > 1 then level of service = Noober Pool
    //   levelOfService = "Noober Pool"
    //   console.log(`${[i]} - ${ride.length} - ${levelOfService}`); // printing ride#, ride length, and level of service for each ride

    // } else if (ride.purpleRequested == true) {   // if purpleRequest = true, then level of service = Noober Purple = always 1
    //   levelOfService = "Noober Purple"
    //   console.log(`${[i]} - ${ride.length} - ${levelOfService}`); // printing ride#, ride length, and level of service for each ride

    // } else if (ride.numberOfPassengers > 3) {    // if number of total people is > 3, then level of service = Noober XL
    //   levelOfService = "Noober XL"
    //   console.log(`${[i]} - ${ride.length} - ${levelOfService}`); // printing ride#, ride length, and level of service for each ride

    // } else {
    //   levelOfService = "Noober X"
    //   console.log(`${[i]} - ${ride.length} - ${levelOfService}`); // printing ride#, ride length, and level of service for each ride
    // }

  }



  // 🔥 start here: write code to loop through the rides


  // inital checker that worked
  // console.log(`array# ${[i]}, leg# ${[l]}`);
  // console.log(leg);
  // console.log(leg.passengerDetails.first);
  // console.log(`${leg.passengerDetails.first} ${leg.passengerDetails.last}`);








  // Pass over top level array and judge how long the length is (for loop)
  // for (let i = 0; i < json.length; i++) {
  //   let ride = json[i]
  //   console.log(ride.length);
  //   console.log(`${[i]} - ${ride[1].passengerDetails.first}`);
  // }

  // if length is 3 then for loop over each ride
  // else - go back to the initial top level array for loop

  // if length is 2 then for loop over each ride
  // else - go back to the initial top level array for loop

  // if length is 1 then for loop over each ride
  // else - go back to the initial top level array for loop

}

window.addEventListener('DOMContentLoaded', pageLoaded)


// passengerDetails: {
//   first: "Thad",
//     last: "Farrell",
//       phoneNumber: "(989) 614-4016"
// },
// pickupLocation: {
//   address: "551 W Elm St",
//     city: "Chicago",
//       state: "IL",
//         zip: "60612"
// },
// dropoffLocation: {
//   address: "2550 S Wabash Ave",
//     city: "Chicago",
//       state: "IL",
//         zip: "60614"
// },
// numberOfPassengers: 1,
//   purpleRequested: false