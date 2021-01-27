async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides
  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    // console.log(ride.length);

    if (ride.length == 3) {
      console.log(ride.length);
      console.log(`${i} - ${ride[1].passengerDetails.first}`);
    } else {

    }

    // if (ride.length > 2) {
    //   console.log(`${i} - ${ride[i].passengerDetails.first}`);
    // }

  }
  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    console.log(`${i} - ${ride[1].passengerDetails.first}`);
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)