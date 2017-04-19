let validate_user = () => {
  //declare variables
  let ob = {},
   student_name = "",
   student_id = "",
   student_email = "";

  // initialize variables
  student_name = document.getElementById("studentName").value;
  student_id = document.getElementById("studentNumber").value;
  student_email = document.getElementById("dvEmail").value;

  //add object to simulate as a database
  ob[''] = {name: "", ID: "", email: ""};
  ob[''] = {name: "",ID: "", email: ""};
  ob[''] = {name: "",ID: "", email: ""};

  let finder = (ob, student_name, student_id) => {
   // declare variable
   let res = "";

   // search function | returns found object or 0
   let search = (ob, search_value) => {
     return (search_value in ob ? ob[search_value] : 0);
   }
   return search(ob, student_name).ID === student_id ? res = "Hello and Welcome" : res = "Incorrect Name or ID, Please fix the issue and resubmit.";
 };

 //alert user
  alert(finder(ob, student_name, student_id));
}

//add event listener to submit button
document.getElementById("submit_form").addEventListener("click", validate_user);
