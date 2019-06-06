const frown = "M272,269.4c-1.1,0-2-0.9-2-2c0-11.5-8.8-20.5-20-20.5s-20,9-20,20.5c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-13.8,10.5-24.5,24-24.5c13.4,0,24,10.8,24,24.5C274,268.5,273.1,269.4,272,269.4z"
const meh = "M276.3,255.2h-52.6c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9h52.6c1,0,1.9,0.8,1.9,1.9S277.3,255.2,276.3,255.2z"
const smile = "M250,262.2c-17,0-32.5-13.4-32.5-28.1c0-1.1,0.9-2,2-2s2,0.9,2,2c0,12.4,13.8,24.1,28.5,24.1 c14.6,0,28.5-11.7,28.5-24.1c0-1.1,0.9-2,2-2s2,0.9,2,2C282.5,248.7,267,262.2,250,262.2z"
const buddy = document.querySelector("#buddy");
const mouth_button = document.querySelector("#mouth_button")
const restaurant = document.querySelector(".card")
const photo = document.querySelector(".photo")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
console.log("test")
let toggle = true;

const search = (ev) => {
  let cuisine = document.querySelector('#cuisine').value;
  let loc = document.querySelector('#location').value;
  //https://www.apitutor.org/yelp/simple/v3/businesses/search?limit=5&location=evanston&term=japanese
  let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?limit=5&location=' + loc + '&term=' + cuisine;
  fetch(url)
    .then(response => response.json())
    .then(displayResults);
};


const displayResults = (data) => {
  document.querySelector(".restaurants").innerHTML = ""
  for (item of data) {
    const template = `
      <div class = "card" onclick = "changeFaceByRating("${item.id}");">
        <div class = "photo" style = "background-image: url('${item.image_url}')"></div>
        <p class = "name">${item.name}</p>
        <p class = "address">${item.display_address}</p>
      </div>
    `
    console.log(template);
    document.querySelector(".restaurants").innerHTML += template;
  };
  // const restaurant_cards = document.querySelectorAll(".card");
  // for (card of restaurant_cards) {
  //   card.onclick = changeFaceByRating;
  // }
};

document.querySelector("#search").onclick = search;

// NAVIGATION
left.addEventListener("click", () => {
  console.log("Left")

})

// CLICKING ON THE FACE
mouth_button.addEventListener("click", () => {
  console.log(document.querySelector(".mouth_path"))
  //Use Anime.js here
  // Setting up the timeline
  const timeline = anime.timeline({
    duration : 130,
    easing: 'easeInOutSine'
  });
  /// Add animations to the timeline
  timeline.add({
    targets: ".mouth_path",
    d: [
      {value: toggle ? frown : smile}
    ]
  })
  .add({
    tagets: "section",
    backgroundColor: 'rgb(22, 22, 22)'
  })
  if(!toggle){
    toggle = true;
  }else{
    toggle = false;
  }
});
// buddy.addEventListener("click", () => {
//   const timeline = anime.timeline({
//     duration: 750,
//     easing: "easeOutExpo"
//   });
//   timeline.add({
//     targets: ".mouth_path",
//     d: [
//       {value: smile}
//     ]
//   })
// })
mouth_button_meh.addEventListener("click", () => {
  console.log(document.querySelector(".mouth_path"))
  //Use Anime.js here
  // Setting up the timeline
  const timeline = anime.timeline({
    duration : 130,
    easing: 'easeInOutSine'
  });
  /// Add animations to the timeline
  timeline.add({
    targets: ".mouth_path",
    d: [
      {value: toggle ? meh : smile}
    ]
  })
  .add({
    tagets: "section",
    backgroundColor: 'rgb(22, 22, 22)'
  })
  if(!toggle){
    toggle = true;
  }else{
    toggle = false;
  }
});

const changeFaceByRating = (id) => {
      // console.log(item.rating)
      // console.log(item.rating);
      console.log("change face");

      console.log(id);
      //Use Anime.js here
      // Setting up the timeline
      /// Add animations to the timeline
  //     if (item.rating == 4) {
  //       const timeline = anime.timeline({
  //         duration : 130,
  //         easing: 'easeInOutSine'
  //       });
  //       timeline.add({
  //         targets: ".mouth_path",
  //         d: smile
  //       })}
  //     });
  // }
};
