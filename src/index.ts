//objects
type Employee = {
readonly id : number,
name : string,
retire : (date:Date)=>number
};

let employee:Employee = {
    id :1,
    name : "",
    retire(date) {
        return date.getDay();
    },
}