// const search = (ev) => {
//   let term = document.querySelector('input').value;
//   let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?limit=5&location=' + term;
//   fetch(url)
//     .then(response => response.json())
//     .then(displayResults);
// };
//
// const displayResults = (data) => {
//   document.querySelector(".restaurants").innerHTML = ""
//   for (item of data) {
//     const template = `
//       <div class = "card">
//         <div class = "photo" style = "background-image: url('${item.image_url}')"></div>
//         <p class = "name">${item.name}</p>
//         <p class = "address">${item.display_address}</p>
//       </div>
//     `
//     console.log(template);
//     document.querySelector(".restaurants").innerHTML += template;
//   };
// };
//
// document.querySelector("#search").onclick = search;
