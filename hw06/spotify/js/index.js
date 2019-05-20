const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=' + document.querySelector('input').value + '&type=track';
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
  //  document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
    document.querySelector("#output").innerHTML = ""
    for (item of data) {
      const template = `
        <div class = "card">
          <div class = "photo" style = "height: 300px; background-image: url('${item.album.image_url}')"></div>
          <p class = "title">${item.name}</p>
          <p class = "album">${item.album.name}</p>
          <p class = "artist">${item.artist.name}</p>
        </div>
      `;
      console.log(template);
      // document.querySelector("title").value.slice(0,20);
      document.querySelector("#output").innerHTML += template;
    }
};

      // <audio id = "preview" controls><source src="${item.preview_url}" type="audio/mp3"> </audio>
      // onclick="document.getElementById('preview').play();"
      // onclick="document.getElementById('preview').pause();"



document.querySelector('#search').onclick = search;
