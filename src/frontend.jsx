import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Stores server data on the frontend, updated with every action and on page reset / initialization.
// let previous_app_data = [];

let mountTableNode = document.getElementById("forum_section");
ReactDOM.render(<App />, mountTableNode);
// ReactDOM.render(<App submitButton={submitButton}/>, mountTableNode);

// Function that is responsible for adding an item to our forum
const addItemFunc = function (e) {
  // prevent default form action from being carried out
  e.preventDefault();

  const json = getNewStudentFromFields(),
    body = JSON.stringify(json);

  // Submit the POST request
  fetch("/submit", {
    method: "POST",
    body,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Initialize the table
      //   initialize_list(data);

      // Reset the data list
      //   previous_app_data = data;

      //   return data;
      ReactDOM.render(<App />, mountTableNode).load();
    });

  return false;
};

// Function that is responsible for updating an existing item in our forum
// function updateItemFunc(button) {
//   // Generate variables necessary for POST request
//   const json = getNewStudentFromFields();
//   let id_value = button.composedPath()[0].id.substring(1);
//   json._id = id_value;
//   let body = JSON.stringify(json);

//   // Send POST request
//   fetch("/updateEntry", {
//     method: "POST",
//     body,
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Create table
//       initialize_list(data);

//       // Update data
//       previous_app_data = data;

//       return data;
//     });

//   return false;
// }

// Function that is responsible for deleting an item from our forum
// function deleteItemFunc(button) {
//   // POST request variables
//   const input = button.composedPath()[0].id.substring(1),
//     json = { _id: input },
//     body = JSON.stringify(json);

//   // Send POST request
//   fetch("/deleteEntry", {
//     method: "POST",
//     body,
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // Generate table
//       initialize_list(data);

//       // Update data
//       previous_app_data = data;

//       return data;
//     });

//   return false;
// }

// Function responsible for resetting our table to match the server data
// function initialize_list(data_points) {
//   // Gets teh forum section and resets it to be empty
//   let forum_section = document.getElementById("forum_section");

//   if (forum_section != null) {
//     forum_section.remove();
//   }

//   // Main table element
//   const table_element = document.createElement("table");
//   table_element.setAttribute("class", "table_area");
//   table_element.setAttribute("id", "forum_section");

//   // All header cells
//   const info_name_header = document.createElement("th");
//   const info_class_header = document.createElement("th");
//   const info_role_header = document.createElement("th");
//   const info_hours_header = document.createElement("th");
//   const info_year_header = document.createElement("th");
//   const info_grad_header = document.createElement("th");
//   const info_delete_header = document.createElement("th");
//   const info_update_header = document.createElement("th");

//   // Header row
//   const element_table_header_row = document.createElement("tr");
//   element_table_header_row.setAttribute("class", "forum_header");

//   // Set class for styling
//   info_name_header.setAttribute("class", "forum_header");
//   info_class_header.setAttribute("class", "forum_header");
//   info_role_header.setAttribute("class", "forum_header");
//   info_hours_header.setAttribute("class", "forum_header");
//   info_year_header.setAttribute("class", "forum_header");
//   info_grad_header.setAttribute("class", "forum_header");
//   info_delete_header.setAttribute("class", "forum_header");
//   info_update_header.setAttribute("class", "forum_header");

//   // Set information
//   info_name_header.innerHTML = "Student Name";
//   info_class_header.innerHTML = "Class Assignment";
//   info_role_header.innerHTML = "Role";
//   info_hours_header.innerHTML = "Hrs/Week";
//   info_year_header.innerHTML = "Class Year";
//   info_grad_header.innerHTML = "Grad Date";
//   info_delete_header.innerHTML = "Remove Student";
//   info_update_header.innerHTML = "Update Student Info";

//   // Append them to teh header row
//   element_table_header_row.appendChild(info_name_header);
//   element_table_header_row.appendChild(info_class_header);
//   element_table_header_row.appendChild(info_role_header);
//   element_table_header_row.appendChild(info_hours_header);
//   element_table_header_row.appendChild(info_year_header);
//   element_table_header_row.appendChild(info_grad_header);
//   element_table_header_row.appendChild(info_delete_header);
//   element_table_header_row.appendChild(info_update_header);

//   // Append the header row to the table
//   table_element.appendChild(element_table_header_row);

//   // A function that makes a new table row based on the data_point passed in
//   function myFunc(data_point) {
//     // Create the necessary cell elements for the new table row
//     const element_list_info_name = document.createElement("td");
//     const element_list_info_class = document.createElement("td");
//     const element_list_info_role = document.createElement("td");
//     const element_list_info_hours = document.createElement("td");
//     const element_list_info_year = document.createElement("td");
//     const element_list_info_grad = document.createElement("td");
//     const element_list_delete = document.createElement("BUTTON");
//     const element_list_delete_table_cell = document.createElement("td");
//     const element_list_update = document.createElement("BUTTON");
//     const element_list_update_table_cell = document.createElement("td");

//     // Make a new table row
//     const element_table_row = document.createElement("tr");
//     element_table_row.setAttribute("class", "forum_row");

//     // Set the necessary information for the elements below for identification and stylizing
//     element_list_info_name.setAttribute("class", "forum_cell");
//     element_list_info_name.innerHTML = data_point.StudentName;
//     element_list_info_class.setAttribute("class", "forum_cell");
//     element_list_info_class.innerHTML = data_point.StudentClass;
//     element_list_info_role.setAttribute("class", "forum_cell");
//     element_list_info_role.innerHTML = data_point.StudentRole;
//     element_list_info_hours.setAttribute("class", "forum_cell");
//     element_list_info_hours.innerHTML = data_point.StudentHours;
//     element_list_info_year.setAttribute("class", "forum_cell");
//     element_list_info_year.innerHTML = data_point.StudentYear;
//     element_list_info_grad.setAttribute("class", "forum_cell");
//     element_list_info_grad.innerHTML = data_point.StudentGradDate;

//     element_list_delete.setAttribute("id", "r" + data_point._id.toString());
//     element_list_delete.setAttribute("class", "forum_cell_button");
//     element_list_delete.innerHTML = "Remove Entry";
//     element_list_update.setAttribute("id", "u" + data_point._id.toString());
//     element_list_update.setAttribute("class", "forum_cell_button");
//     element_list_update.innerHTML = "Update Entry";

//     element_list_delete_table_cell.setAttribute("class", "forum_cell");
//     element_list_update_table_cell.setAttribute("class", "forum_cell");

//     // Pair functions to buttons
//     element_list_delete.onclick = deleteItemFunc;
//     element_list_update.onclick = updateItemFunc;

//     // Put buttons inside of cells
//     element_list_update_table_cell.appendChild(element_list_update);
//     element_list_delete_table_cell.appendChild(element_list_delete);

//     // Append children to the current row
//     element_table_row.appendChild(element_list_info_name);
//     element_table_row.appendChild(element_list_info_class);
//     element_table_row.appendChild(element_list_info_role);
//     element_table_row.appendChild(element_list_info_hours);
//     element_table_row.appendChild(element_list_info_year);
//     element_table_row.appendChild(element_list_info_grad);
//     element_table_row.appendChild(element_list_delete_table_cell);
//     element_table_row.appendChild(element_list_update_table_cell);

//     // Append the row to the table
//     table_element.appendChild(element_table_row);
//   }

//   // For every data point we have, make a new table row out of them
//   data_points.forEach(myFunc);

//   // Add the table to the display
//   document.body.appendChild(table_element);
// }

function getNewStudentFromFields() {
  let radio_elements = document.getElementsByName("year_radio"),
    radio_result = "";

  for (let i = 0; i < radio_elements.length; i++) {
    if (radio_elements[i].checked) radio_result = radio_elements[i].value;
  }

  const name_input = document.querySelector("#StudentName"),
    class_input = document.querySelector("#StudentClass"),
    role_input = document.querySelector("#StudentRole"),
    date_result = document.querySelector("#StudentGradDate"),
    json = {
      StudentName: name_input.value,
      StudentClass: class_input.value,
      StudentRole: role_input.value,
      StudentYear: radio_result,
      StudentGradDate: date_result.value,
    };
  return json;
}

window.onload = function () {
  const submitButton = document.getElementById("add_entry_button");
  submitButton.onclick = addItemFunc;
};
