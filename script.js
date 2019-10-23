function validateForm(){
    if (document.forms["signupForm"]["firstName"].value == "") {
    alert("First name must be filled out");
    return false;
  }
  if (document.forms["signupForm"]["lastName"].value == "") {
    alert("Last name must be filled out");
    return false;
  }
  if (document.forms["signupForm"]["userEmail"].value == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["signupForm"]["userEmail"].value)==false){
    alert("Please enter a valid email");
    return false;
    }
  if (document.forms["signupForm"]["userAddress"].value == "") {
    alert("Address must be filled out");
    return false;
  }
  if (document.forms["signupForm"]["userPassword"].value == "") {
    alert("Password must be filled out");
    return false;
  }else if(/^(?=.*?[A-Z])[A-Za-z\d].{7,}$/.test(document.forms["signupForm"]["userPassword"].value)==false){
    // alert(document.forms["signupForm"]["userPassword"].value)
    alert("Password must be at least 8 characters long,a combination of charatacters , numbers and at least a capital letter")
    return false;
  }
  
  if (document.forms["signupForm"]["userComments"].value == "") {
    alert("Comments be filled out");
    return false;
  }
}
