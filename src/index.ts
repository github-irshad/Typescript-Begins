//Functions


function CheckStringOrNumber(input:any):void
{
    if(typeof(input)== typeof(String) )
        console.log("string")
    console.log("number");
}

CheckStringOrNumber("abc");

