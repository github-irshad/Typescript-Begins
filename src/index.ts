//Nullable types
function greet(name:string|null){
if(name)
console.log(name.toLocaleLowerCase);
else{console.log('Hola');
}

}
greet("null")