const displayMainImg = document.getElementById("main-img");
const displayThumbnail = document.getElementById("thumbnail-container");
const footer = document.getElementById("footer");
let imageIndex = 0;
// functions for using arrow keys to navigate through photos using keyboard

function arrowPress(event) {
  // debugger;
  // console.log(event);
  if (event.key === "ArrowLeft") {
    nextImage(-1); // callback function for if image index is more than that on the screen, loop back to last image in array
    console.log("left key pressed");
  }
  if (event.key === "ArrowRight") {
    //Right arrow

    // if (imageIndex < images.length) {
    //   imageIndex -= 1;
    // }
    nextImage(1); // callback function for if image index is less than that on the screen, loop back to first image in array
    console.log("right key pressed");
  }
  if (event.key === " ") { // if spacebar is pressed
    nextImage(1);
    console.log("spacebar pressed")
  }
}

document.addEventListener("keydown", arrowPress);

function nextImage(index) {
  imageIndex += index;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  console.log(imageIndex);
  displayLargeImg(images[imageIndex]);
}

// putting images within array as objects

const images = [
  {
    src: "https://images.unsplash.com/photo-1628246499185-54f441171885?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "not sure what this is but there's a variegated monstera in there somewhere.",
    title:
      "not sure what this is but there's a variegated monstera in there somewhere.",
  },
  {
    src: "https://images.unsplash.com/photo-1614959541555-4550895d4b2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "houseplants by a fireplace",
    title: "houseplants by a fireplace",
  },
  {
    src: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "another selection of houseplants",
    title: "another selection of houseplants",
  },

  {
    src: "https://images.unsplash.com/photo-1619423089884-bc5b70bc4e2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "pretty monstera, also known as swiss cheese plant",
    title: "pretty monstera, also known as swiss cheese plant",
  },
  {
    src: "https://images.unsplash.com/photo-1595248712252-ac6276c09a57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "selection of succulents",
    title: "selection of succulents",
  },
];

// create function to display images within array as thumbnails using forEach loop

function thumbnails() {
  images.forEach(function (thumbnail) {
    const img = document.createElement("img"); // creates an image tag within html which is seen in the console
    img.src = thumbnail.src;
    img.alt = thumbnail.alt;
    img.title = thumbnail.title; // adding src, alt and title attributes by accessing each object within the array
    displayThumbnail.appendChild(img); // appending thumbnail to the thumbnail container (first div)
    img.addEventListener("click", function () {
      displayLargeImg(thumbnail); // calling function that has been created to display thumbnail
      console.log("image clicked");
    });
    // img.addEventListener("click", function () {

    // });
  });
}

// create function to display big image onto the page

function displayLargeImg(largeImg) {
  displayMainImg.innerHTML = "";
  const largeImage = document.createElement("img");
  largeImage.src = largeImg.src;
  largeImage.alt = largeImg.alt;
  largeImage.title = largeImg.title;
  displayMainImg.appendChild(largeImage);
}

//function for footer
function appendFooter() {
  const p = document.createElement("p");
  footer.appendChild(p);
  p.textContent = "Images courtesy of Unsplash Ltd.";
  p.style.color = "white";
  p.style.fontFamily = "monospace";
  p.alt = "footer tag";
}

// function onFocus() {
//   images.addEventListener("click", function () {
//     console.log("images clicked");
//   });
//   // images.forEach(function (image) {
//   //     image.addEventListener("focus", (e) => {
//   //         console.log(`Element ${e.currentTarget} is focused`);
//   //       });
//   //     });
// }

// execute the functions
thumbnails();
displayLargeImg(images[0]);
appendFooter();
// onFocus();
arrowPress();
