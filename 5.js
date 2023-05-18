function myFunction() 
{
    var sentence = document.getElementById("numb").value;
    document.getElementById("demo").innerHTML = sentence.split('').reverse().join('');
}
function myFunction1() 
  {
    var sentence = document.getElementById("numb").value;
    var i = 0;

    while (sentence[i] != null) 
    {
    i++;
    }
    document.getElementById("demo").innerHTML = i;
  }
