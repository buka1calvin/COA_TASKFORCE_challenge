document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  const animals = [
    { name: "FENNEC", title: " FOX", location: "India", image: "fox.png" },
    {
      name: "HUMPBACK ",
      title: "WHALE",
      location: "South Africa",
      image: "dolphin.png",
    },
    {
      name: "COMMON BROWN",
      title: "BABOON",
      location: "South Africa",
      image: "monkey.png",
    },
    { name: "SPOTTED", title: "DEER", location: "Amazon", image: "impala.png" },
  ];

  animals.forEach((animal) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";

    galleryItem.innerHTML = `
      <img src="assets/images/${animal.image}" alt="${animal.name}">
      <div class="gallery-item-content">
        <h1>${animal.name} <br/>${animal.title}</h1>
        <p>${animal.location}</p>
      </div>
      <div class="overlay">
        <button>Know More <img src="assets/icons/Vector.svg" alt="" class="image"></button>
      </div>
      `;

    gallery.appendChild(galleryItem);
  });
});
