
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN
// let ulChildren = document.ul.children;
// let ulChildNodes = document.querySelector('ul').childNodes;
// console.log(ulChildren[0]);
// console.log(ulChildNodes[0]);







    
    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }
    
    document.body.style.backgroundColor = getBrightRandomRGB();
    
    //_ ████████████████████████████████████  DATA STRUCTURES 
    
    //_ ████████████████████████████████████  DATA STRUCTURES 
    
    
//>  ████████████████████████████████████  GENERAL PROGRAM

let p = document.getElementsByTagName('p')[2];

let previousS = p.previousSibling;

console.log(previousS);
console.log(previousS);

previousS.previousSibling.style.backgroundColor = 'blue';


//>  ████████████████████████████████████  GENERAL PROGRAM



let bodyChildren = document.body.children;
console.log(bodyChildren.length);

let div = document.getElementsByTagName('div')[0];

let grandparent =  div.parentNode.parentNode;
console.log(grandparent);

grandparent.style.backgroundColor = 'red';

let h1 = document.getElementsByTagName('h1')[0];
console.log(h1);





// console.log(document.documentElement);

    //< ████████████████████████████████████  MISC

})

