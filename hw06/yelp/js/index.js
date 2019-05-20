const search = (ev) => {
    //console.log(document.querySelector('input').value);
    let term = document.querySelector('input').value;
    let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=' + term;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    //document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
    document.querySelector("#output").innerHTML = ""
    for (item of data) {
      const template = `
        <div class = "card">
          <p class = "name">${item.name}</p>
          <div class = "photo" style = "height: 300px; background-image: url('${item.image_url}')"></div>
          <p class = "info">${item.rating} stars | ${item.review_count} reviews | ${item.price}</p>
          <p class = "address">${item.display_address} </p>
        </div>

      `;
      console.log(template);
      // document.querySelector("title").value.slice(0,20);
      document.querySelector("#output").innerHTML += template;
    };
};

document.querySelector('#search').onclick = search;
