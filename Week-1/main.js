const personArray = ["Harkirat", "Pratham", "Raman"];

console.log(personArray[0])

const age =[18, 21, 22, 24, 25]; 
let max=age[0];

for (let i=0; i< age.length; i++){
    if (age[i]>max){
        max = age[i];
    }
   
}
console.log(max); 

