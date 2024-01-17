const axios = require('axios');

// Fetch HTTP using axios
axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error fetching data:", error));
