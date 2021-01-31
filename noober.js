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
        console.log(levelOfService);
        console.log(passengerNumberOfPassengers);
        console.log(passengerName);
        console.log(passengerPhone);
        console.log(passengerPickupAddressLine1);
        console.log(passengerPickupAddressLine2);
        console.log(passengerDropoffAddressLine1);
        console.log(passengerDropoffAddressLine2);

        // PRINTING
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else if (leg.purpleRequested == true) {   // if purpleRequest = true, then level of service = Noober Purple = always 1
        levelOfService = "Noober Purple"
        console.log(levelOfService);
        console.log(passengerNumberOfPassengers);
        console.log(passengerName);
        console.log(passengerPhone);
        console.log(passengerPickupAddressLine1);
        console.log(passengerPickupAddressLine2);
        console.log(passengerDropoffAddressLine1);
        console.log(passengerDropoffAddressLine2);

        // PRINTING
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else if (leg.numberOfPassengers > 3) {    // if number of total people is > 3, then level of service = Noober XL
        levelOfService = "Noober XL"
        console.log(levelOfService);
        console.log(passengerNumberOfPassengers);
        console.log(passengerName);
        console.log(passengerPhone);
        console.log(passengerPickupAddressLine1);
        console.log(passengerPickupAddressLine2);
        console.log(passengerDropoffAddressLine1);
        console.log(passengerDropoffAddressLine2);

        // PRINTING
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      } else {                                    // else Noober X
        levelOfService = "Noober X"
        console.log(levelOfService);
        console.log(passengerNumberOfPassengers);
        console.log(passengerName);
        console.log(passengerPhone);
        console.log(passengerPickupAddressLine1);
        console.log(passengerPickupAddressLine2);
        console.log(passengerDropoffAddressLine1);
        console.log(passengerDropoffAddressLine2);

        // PRINTING
        let outputElement = document.querySelector(".rides")
        outputElement.insertAdjacentHTML("beforeend",
          `
            <h1
              class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              <i class="fas fa-car-side"></i>
              <span>${levelOfService}</span>
            </h1>

            <div class="border-4 border-gray-900 p-4 my-4 text-left">
              <div class="flex">
                <div class="w-1/2">
                  <h2 class="text-2xl py-1">${passengerName}</h2>
                  <p class="font-bold text-gray-600">${passengerPhone}</p>
                </div>
                <div class="w-1/2 text-right">
                  <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${passengerNumberOfPassengers} passengers
                  </span>
                </div>
              </div>
              <div class="mt-4 flex">
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                  <p>${passengerDropoffAddressLine1}</p>
                  <p>${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          `
        )

      }
    }
  }
}


window.addEventListener('DOMContentLoaded', pageLoaded)