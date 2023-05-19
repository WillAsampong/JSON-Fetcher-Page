let usersList = document.querySelector('.users-list');
// Building table to hold data
let table = `<table><thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>`;

const urls = ['https://jsonplaceholder.typicode.com/users'];

// loop through url given above and fetch data
for( var i = 0; i < urls.length; i++) {
   fetch(urls[i])
//    convert data or response fetched from the url as JSON
    .then(response => response.json())
    .then(data => {
        // Building table rows
        for (var i = 0; i < data.length; i++) {table += `<tr><td>` + data[i].name + `</td><td>` + data[i].email + `</td><td>` + data[i].phone + `</td></tr>`;
    }
        // closing table tags
        table += `</tbody></table>`;
        // add table to DOM
        usersList.innerHTML = table;
    })
    // catch error if fetching the data is not succesful
    .catch(err => console.log(err)); 
}

// search filter function
const searchUser = document.querySelector('#searchInput');
// Adding event listener to search input
searchUser.addEventListener('input', () => {
    // Converting the input value to lowercase to make it case insensitive
    const searchTerm = searchUser.value.toLowerCase();

    // Selecting the rows in the table to display search items and storing in tRows variable
    const tRows = document.querySelectorAll('tbody tr');

    // looping through the rows using forEach
    tRows.forEach(row => {

        // Selecting all table cells in each row and storing in items variable
      let items = row.querySelectorAll('td');

    //   Set found variable to false to make it a boolean to track any matching search items
      let found = false;

    // Looping through table cells in each row
      items.forEach(item => {

      // If item includes search input found is set to true 
        if (item.textContent.toLowerCase().includes(searchTerm)) {
          found = true;
        }
      });

      // If item is not found the row is hidden and vice versa
      if (found) {
        row.style.display = ''; 
      } else {
        row.style.display = 'none'; 
      }
    });
  });
  

// Displaying text and changing background color of contact-form when it is submitted
const successMessage = document.querySelector('#success-message');
const form = document.querySelector('#submit-form-button');
form.addEventListener('click', function(e) {
    e.preventDefault();
    successMessage.style.display = 'block';
    form.style.backgroundColor = '#f2fbf1';
});
  














