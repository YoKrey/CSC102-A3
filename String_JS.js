function strings()
{
    //Text entry Var
    var string1 = document.getElementById("firststring").value;
    var string2 = document.getElementById("secondstring").value;

    //Var answers post submit in <p>
    var str3 = string1 + string2;
    document.getElementById("updates").innerHTML= "Concatenated String = " + str3;

    var len = str3.length;
    document.getElementById("updates2").innerHTML= "Length of Concat String = " + len;

    var substring = str3.substring(1,3)
    document.getElementById("updates3").innerHTML = "Substring = " + substring;

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