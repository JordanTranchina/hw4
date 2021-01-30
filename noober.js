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

    let levelOfService = "testing level of service"

    for (let l = 0; l < ride.length; l++) { // calling the legs
      let leg = ride[l]

      // Setting variables
      let passengerNumberOfPassengers = leg.numberOfPassengers
      let passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
      let passengerPhone = leg.passengerDetails.phoneNumber
      let passengerPickupAddressLine1 = leg.pickupLocation.address
      let passengerPickupAddressLine2 = `${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}`
      let passengerDropoffAddressLine1 = leg.dropoffLocation.address
      let passengerDropoffAddressLine2 = `${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`

      console.log(passengerNumberOfPassengers);
      console.log(passengerName);
      console.log(passengerPhone);
      console.log(passengerPickupAddressLine1);
      console.log(passengerPickupAddressLine2);
      console.log(passengerDropoffAddressLine1);
      console.log(passengerDropoffAddressLine2);
      console.log("--------------------------------");

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
}

window.addEventListener('DOMContentLoaded', pageLoaded)