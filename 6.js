function printnum()
{
    var first = document.getElementById("starting").value;
    var end = document.getElementById("ending").value;
    for (let i = first; i <= end; i++) 
    {
        let flag = 0;
        for (let j = 2; j < i; j++) 
        {
            if (i % j == 0) 
            {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            document.getElementById("demo").innerHTML += i + '<br>';
        }
        
    }    
}