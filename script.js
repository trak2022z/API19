const apiKey = 'tGqQzv88lo5ygX4P71TyxSg3ppwS4SN5'; // replace with your API key
const gifContainer = document.getElementById('gif');
const button = document.getElementById('button');

// Function to fetch a random GIF and display it
async function displayRandomGIF() {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);
  const data = await response.json();
  gifContainer.innerHTML = `<img src="${data.data.images.original.url}" alt="${data.data.title}">`;

  // Log the response to the console
  console.log(data);
}

// Display a random GIF on page load
displayRandomGIF();

// Add event listener to button click
button.addEventListener('click', displayRandomGIF);
