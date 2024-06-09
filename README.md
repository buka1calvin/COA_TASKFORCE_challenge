# COA Taskforce Challenge

## Overview
This repository contains the implementation of the COA Taskforce Challenge. It includes an interactive photo gallery and solutions to two coding challenges.

## Table of Contents
- [Interactive Photo Gallery](#interactive-photo-gallery)
  - [HTML Structure](#html-structure)
  - [CSS Styling](#css-styling)
  - [JavaScript Interactivity](#javascript-interactivity)
- [Coding Challenges](#coding-challenges)
  - [Challenge 1: Contiguous Subarray Sum](#challenge-1-contiguous-subarray-sum)
  - [Challenge 2: String Transformation](#challenge-2-string-transformation)
- [How to Run](#how-to-run)
- [Folder Structure](#folder-structure)

## Interactive Photo Gallery
The interactive photo gallery displays images with overlays and hover effects. The gallery is responsive and styled according to the provided design guidelines.

### HTML Structure
The HTML file sets up the basic structure of the gallery:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>COA take Home Challenge</title>
    <link rel="stylesheet" href="/CSS/style.css" />
    <link href="https://fonts.cdnfonts.com/css/d-din" rel="stylesheet" />
  </head>
  <body class="">
    <main class="gallery" id="gallery"></main>
    <script src="/Javascript/gallery.js"></script>
  </body>
</html>
```

### CSS Styling
The CSS file (\`style.css\`) styles the gallery and its components, ensuring it adheres to the design guidelines:

```
@import url("https://fonts.cdnfonts.com/css/d-din");
@import url("https://fonts.cdnfonts.com/css/poppins");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
}

.gallery {
  display: flex;
  gap: 2px;
  width: 100%; 
  height: 100%;
}

.gallery-item {
  position: relative;
  flex: 1 1 calc(25% - 2px); 
  min-width: 200px; 
  overflow: hidden;
}

.gallery-item .gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.gallery-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
  transition: opacity 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  padding: 40px;
  box-sizing: border-box;
  z-index: 2;
}

.gallery-item-content {
  font-family: "D-DIN Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 3;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease;
}

.gallery-item-content h1 {
  font-size: 38px;
  font-weight: 700;
  line-height: 38px;
}

.gallery-item-content p {
  font-size: 12px;
  line-height: 16.02px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  opacity: 0.7;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.03);
  filter: grayscale(100%) blur(5px);
}

.gallery-item:hover::before {
  opacity: 0.7;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.overlay button {
  color: #24bec8;
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px; 
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-top: 10px;
  z-index: 4;
  font-weight: 600;
}

.overlay .button-image {
  width: 12px;
  height: 12px;
}

.gallery-item:hover .overlay button {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item:hover .gallery-item-content {
  transform: translateY(-30px);
}

@media (max-width: 768px) {
  .gallery-item-content, .overlay button {
    display: none;
  }

  .gallery-item {
    flex: 1 1 auto;
    min-width: 0;
    height: 100vh; 
  }

  .gallery-item img {
    height: 100%; 
  }
}
```

### JavaScript Interactivity
The JavaScript file (\`gallery.js\`) adds interactivity to the gallery by dynamically generating gallery items:

```
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
      <img src="assets/images/${animal.image}" alt="${animal.name}" class="gallery-image">
      <div class="gallery-item-content">
        <h1>${animal.name} <br/>${animal.title}</h1>
        <p>${animal.location}</p>
      </div>
      <div class="overlay">
        <button>Know more <img src="assets/icons/Vector.svg" alt="" class="button-image"></button>
      </div>
      `;

    gallery.appendChild(galleryItem);
  });
});
```
## Gallery web-Solution

### Screens

![Alt Text](/assets/images/large-screenView.png)

![Alt Text](/assets/images/tabletview.png)
![Alt Text](/assets/images/mobileView.png)

## Coding Challenges
This section contains the solutions to the coding challenges.


### Challenge 1: Contiguous Subarray Sum
This challenge checks if there is a contiguous subarray that sums up to a targeted value.

```
const contigiousSubArraySum = (array, targetedSum) => {
    //i initialized the sum of the current window and a map to store previous sums
    let cumulativeSum=0
    const seenSums=new Map()
    //looped over the array
    for (let number of array){
        //made summation of the cumulative sum to each element within the array
        cumulativeSum+=number

        //here i checked if the the cumulated sum is equal to the targeted sum
        if(cumulativeSum===targetedSum){
            return true
        }

        //check if the thereis any subArray that sum up to the target
        if(seenSums.has(cumulativeSum-targetedSum)){
            return true
        }

        //store the cumulative/current sum to the map
        seenSums.set(cumulativeSum,true)
    }
};

const array = [4, 2, 7, 1, 9, 5];
const targetedSum = 17;
console.log(contigiousSubArraySum(array, targetedSum));
```

### Challenge 2: String Transformation
This challenge transforms a string based on its length's divisibility by 3, 5, or both.

```
const stringTransform = (inputText) => {
  const length = inputText.length;

  //created a helper function which accept a parameter as a  number to check the divisibility of the input text by a given number
  const isDivisibleBy = (num) => length % num === 0;

  //here i'm checking the condtion if the length is divisible by 15 first of all

  if (isDivisibleBy(15)) {
    //here i created a reversed string
    const reversedInputText = inputText.split("").reverse().join("");
    //here i map through my splitted reversed string and replace each character with ASCII code
    return [...reversedInputText].map((char) => char.charCodeAt(0)).join(" ");
  }
  //here i'm checking if the length is divisible by 3 and return a reversed string
  if (isDivisibleBy(3)) {
    return inputText.split("").reverse().join("");
  }

  //here the divisisbility of input tstring length by 5 is checked and the string splitted and each caharacter is replaced by the ASCII code
  if (isDivisibleBy(5)) {
    return [...inputText].map((char) => char.charCodeAt(0)).join(" ");
  }
  //here if no condition is met the string is returned as it is 
  return inputText;
};
```

## How to Run
1. Clone this repository.
2. Open \`index.html\` in a web browser to view the interactive photo gallery.
3. Navigate to the \`/Challenges\` folder to view and run the coding challenge solutions.

## Folder Structure

```
COA_Taskforce_Challenge/
│
├── index.html
├── CSS/
│   └── style.css
├── Javascript/
│   └── gallery.js
├── Challenges/
│   ├── arrayMap.js
│   └── stringTransform.js
├── assets/
│   ├── icons/
│   │   └── Vector.svg
│   └── images/
│       ├── fox.png
│       ├── dolphin.png
│       ├── monkey.png
│       └── impala.png
└── README.md
```