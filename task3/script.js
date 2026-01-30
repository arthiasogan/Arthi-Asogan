let images = [];

const form = document.getElementById("imageForm");
const gallery = document.getElementById("gallery");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const url = document.getElementById("url").value;
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;

  if (url === "" || title === "" || category === "") {
    alert("Image URL, Title மற்றும் Category அவசியம்!");
    return;
  }

  
  const imageData = {
    url: url,
    title: title,
    category: category
  };

  images.push(imageData);

  displayImages(images);
  form.reset();
});


function displayImages(data) {
  gallery.innerHTML = "";

  data.forEach(img => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${img.url}">
      <h4>${img.title}</h4>
      <p>${img.category}</p>
    `;

    gallery.appendChild(card);
  });
}

function filterImages(cat) {
  if (cat === "All") {
    displayImages(images);
  } else {
    const filteredImages = images.filter(img => img.category === cat);
    displayImages(filteredImages);
  }
}
