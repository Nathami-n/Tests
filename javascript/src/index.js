let englishCode = "En_US";
let frenchCode = "Fr_FR";


const getLanguage = (code) => {
    switch(code) {
        case englishCode:{
            return "English"
        };

        case frenchCode: {
            return "French"
        }
    }
};


 const myLanguage = getLanguage("En_US");

 console.log(myLanguage);


 module.exports = {
    getLanguage
 };



 function returnBoolean (number) {
    let response;
   return (number===1) ? response = true : response = false;
    
 };


 const returnNumber = () => {
  
    let truthValue = returnBoolean(1);

    console.log(truthValue);
 };


 returnNumber();



//two sum


const findTwoSum = (numbers) => {
    const target = 9;
    const solution = [];

    for (let i = 0; i < numbers.length; i++) {
        for(let  j = i + 1; j < numbers.length; j++) {
            if( numbers[j] + numbers[i] === target) {
                solution.push([numbers[j], numbers[i]]);
            }
        }
    };

    return solution;
};


let array = [1, 2, 3, 2, 1, 3, 4, 4, 5];

let hashMap = {};

const findOccurrence = (list) => {
    array.forEach((element) => {
        if(!hashMap[element]) {
            hashMap[element] = 1;
        } else {
            hashMap[element] += 1;
        }
    });

    console.log(hashMap);


};

findOccurrence();





