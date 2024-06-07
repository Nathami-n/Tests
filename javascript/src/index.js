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