//Uniontypes
function KgTolb(weight : number | string)
{
    
    if(typeof weight==='number')
    {
        weight.toFixed();
    }
    else{
        weight.toLowerCase();
    }
}