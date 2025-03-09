function strings()
{
    //Text entry Var
    var string1 = document.getElementById("firststring").value;
    

    //Palindrome test (Split, Reverse, Join  )
    var splitstring = string1.split("");
    document.getElementById("updates4").innerHTML = "Splitstring = " + splitstring;

    var reversestring = splitstring.reverse();
    document.getElementById("updates5").innerHTML = "Reversestring = " + reversestring;

    var joinstring = reversestring.join("");
    document.getElementById("updates6").innerHTML = "Joinstring = " + joinstring;

 if (string1 == joinstring)
    {
        document.getElementById("updates7").innerHTML = "Palindrome!";
    }

else
{
    document.getElementById("updates7").innerHTML = "This is NOT a Palindrome!";
}


}