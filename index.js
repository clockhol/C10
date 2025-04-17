// Add JavaScript below

const titleContainer = document.getElementById('placeholder-title');

 fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => titleContainer.textContent = json.title);

    const titleContainer = document.getElementById('placeholder-body');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
       .then(response => response.json())
       .then(json => titleContainer.textContent = json.body);