async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  for (let i = 0; i < json.length; i++) {   // calling arrays
    let ride = json[i]

    // declaring variable
    let levelOfService

    for (let l = 0; l < ride.length; l++) { // calling legs
      let leg = ride[l]

      // declaring variables
      let passengerNumberOfPassengers = leg.numberOfPassengers
      let passengerName = `${leg.passengerDetails.first} ${leg.passengerDetails.last}`
      let passengerPhone = leg.passengerDetails.phoneNumber
      let passengerPickupAddressLine1 = leg.pickupLocation.address
      let passengerPickupAddressLine2 = `${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}`
      let passengerDropoffAddressLine1 = leg.dropoffLocation.address
      let passengerDropoffAddressLine2 = `${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}`

      // RIDE LEVEL - LOGGING
      if (ride.length > 1) {                      // if length of ride is > 1 then level of service = Noober Pool
        levelOfService = "Noober Pool"
      } else if (leg.purpleRequested == true) {   // if purpleRequest = true, then level of service = Noober Purple = always 1
        levelOfService = "Noober Purple"
      } else if (leg.numberOfPassengers > 3) {    // if number of total people is > 3, then level of service = Noober XL
        levelOfService = "Noober XL"
      } else {                                    // else Noober X
        levelOfService = "Noober X"
      }
      console.log(levelOfService);

      // LEG LEVEL - LOGGING
      console.log(passengerNumberOfPassengers);
      console.log(passengerName);
      console.log(passengerPhone);
      console.log(passengerPickupAddressLine1);
      console.log(passengerPickupAddressLine2);
      console.log(passengerDropoffAddressLine1);
      console.log(passengerDropoffAddressLine2);
    }
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)






// console.log(`${[i]} - ${ride.length} - ${levelOfService}`);