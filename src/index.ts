//Functions


function CalculateIncome(income:number, taxyear=2022):number
{
    if(taxyear>2022)
    {
        return income*1.2;
    }
    return 1.3*income;
}

CalculateIncome(50000,2023)

