 // 3) INTERFAZ BASICA
 
 export interface Person {
    firstName: string;
    lastName?: string;
};

let person: Person = {
    firstName: "sofia",
    lastName: "roda"
}

console.log(person);