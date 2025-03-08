function checkCreds()
{
    // keep var organized together
    var firstname = document. getElementById("fName").value;
    var lastname = document. getElementById("lName").value;
    // + " " + adds a space between first and last names
    var fullname = firstname + " " + lastname;
    var zipcode = document. getElementById("zipcode").value;
    var password = document. getElementById("PW").value;

    //Min number of letters 
    if (fullname.length <= 1)
    {
        document.getElementById("loginStatus").innerHTML = "Names must have values";
    }

    //Two ways of checking number length
else if (zipcode.length !=5)
{
    document.getElementById("loginStatus").innerHTML = "Invalid ZIP ";
}
 else if ((zipcode<10000) || (zipcode>99999))
    {
    document.getElementById("loginStatus").innerHTML = "Invalid Zip Code";
    }

    // != not equal to
else if  ( password != "password123")
{
    document. getElementById("loginStatus").innerHTML = "Invalid Password";
}

else
{
    document. getElementById("loginStatus").innerHTML = "Accepted!";
    alert("Credentials Accepted");
      //change location to html file listed
      location.replace("secret page.html");
}

}