function getFormvalue() {
    //Write your code here
	 var firstName = document.getElementsByName("fname")[0].value;
  var lastName = document.getElementsByName("lname")[0].value;

  // Display the first and last name using alert
  alert("First Name: " + firstName + "\nLast Name: " + lastName);

}
