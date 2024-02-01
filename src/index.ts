//Optional chainng
type Customer = {birthday?:Date}
function getCustomer(id:number):Customer | null |undefined{
return id===0?null:{birthday: new Date}
}

let result = getCustomer(0);
console.log(result?.birthday?.getFullYear);
