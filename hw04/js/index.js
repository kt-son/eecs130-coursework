let current_image = null;
// const first_image = cards[0].innerHTML;
const first_image = document.querySelectorAll('.image')[0];
const num_images = document.querySelectorAll('.image').length - 1;
const last_image = document.querySelectorAll('.image')[num_images];
// document.querySelector('.image')

const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    const clickedElement = e.target;
    current_image = clickedElement;
    // figure out what its background image is:
    const imgURL = clickedElement.style.backgroundImage;
    // console.log(imgURL);
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
    document.querySelector('.preview_box').className = 'preview_box active'
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}



// PART 3: Close functionality
// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.
const close = (e) => {
  document.querySelector('.preview_box.active').className = 'preview_box'
};
// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).
document.querySelector('.close').onclick = close;


// PART 4: Next functionality:
const all_cards = document.querySelectorAll('.card');
for (one_card of all_cards) {
  one_card.onclick = showPhoto
}
const first_card = all_cards.firstElementChild;
const last_card = all_cards.lastElementChild;



// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.
const next = (e) => {
  // if current pic = first_card, change next_card's class to active
  // if current pic != first_card (else), loop through next_card n times and change nth card's class to active
  // const imgURL = clickedElement.style.backgroundImage;
  // const current_card = imgURL.parentElement;
  //const imgURL = document.querySelector('.featured_image').style.backgroundImage;
  // const current_card = document.querySelector('.image').outerHTML;
  //const current_card = document.querySelector('.preview_box.active').outerHTML;
  //console.log(current_card);
  if (current_image.parentElement.nextElementSibling === null) {
    current_image = first_image;
  } else {
    current_image = current_image.parentElement.nextElementSibling.firstElementChild;
  }
  document.querySelector('.featured_image').style.backgroundImage = current_image.style.backgroundImage;

  // if (current_image != null) {
  //   current_image = current_image.parentElement.nextElementSibling.firstElementChild;
  //   document.querySelector('.featured_image').style.backgroundImage = current_image.style.backgroundImage;
  // // if nextElementSibling doesn't exist, go back to first element
  // } else (current_image === null) {
  //   document.querySelector('.featured_image').style.backgroundImage = first_image.style.backgroundImage;
  // }
}
//   const next_card_in = imgURL.nextElementSibling;
//   const next_card_in = current_card.nextElementSibling;
//   document.querySelector(next_card_in).firstElementChild = 'preview_box active';
// };
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
document.querySelector('.next').onclick = next;
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
document.querySelector('.featured_image').onclick = next;


// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
const prev = (e) => {
  if (current_image.parentElement.previousElementSibling === null) {
    current_image = last_image;
  } else {
    current_image = current_image.parentElement.previousElementSibling.firstElementChild;
  }
  document.querySelector('.featured_image').style.backgroundImage = current_image.style.backgroundImage;

  // current_image = current_image.parentElement.previousElementSibling.firstElementChild;
  // document.querySelector('.featured_image').style.backgroundImage = current_image.style.backgroundImage;
}
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
document.querySelector('.prev').onclick = prev;
