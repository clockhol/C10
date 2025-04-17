// Add JavaScript below

const btn = document.getElementById('generate');

// This empty paragraph will display the returned random recipe
const recipeContainer = document.getElementById('generated-recipe');



// Now attach a "listener" to the button so we can do something when a user clicks
btn.addEventListener('click', () => {
  
  // We'll use the Fetch API to grab the endpoint
  // Fetch is asynchronous, so it returns a promise. Once the promise resolves ".then" we process the JSON
  // ".then" we replace the text of our paragraph with the "strMeal" value from the JSON object
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(json => recipeContainer.textContent = json.meals[0].strMeal);
});

const titleContainer = document.getElementById('placeholder-title');

 fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => titleContainer.textContent = json.title);