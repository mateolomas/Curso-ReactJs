
//Template literals 

const nombre = "Mateo";
const a = "Hola " + nombre; 
console.log(a); 


const b = `Hola ${nombre}`; 
console.log(b);

//arrow functions 

function saludo() {
    return "Greetings!"
}

const saludoArrowF = () => {return saludo()}; 

console.log(saludoArrowF());

//arrow functions  con template literals 

const MyFunc = (name) => {return `Hola ${name}`;}
console.log(MyFunc('Sebastian'));



//import { operaciones_basicas, operaciones_complejas } from "./exports";

///js for react 2 

//Unestructuring objects and arrays with
/*
const companies = {

    name: 'Coca Cola',
    year: '2017',
    country: 'US'
}


function getCompany (company) {
    return company.name + ' ' + company.year + ' ' + company.country;
}


console.log(getCompany(companies));
*/

//company = ['Pepsi', '2009', 'EC'];

//const [name, year, country] = company; 


//Spread operator 

const Primero = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const Segundo = {
    d: '4',
    e: '5',
    f: '6'
}

const newObj = {...Primero,...Segundo}/// tambien se puede usar con arrays!! 


//ternari operator
//

const companies = {

    name: 'Coca Cola',
    year: '2017',
    country: 'US'
}

/*
let name
if(companies.name) {
    name = companies.name

}
else {
    name = 'Pepsi'
}
*/

//console.log(name);

const name = companies.name ? companies.name : 'Pepsi'

console.log(name)













