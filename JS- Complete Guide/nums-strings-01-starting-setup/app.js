function randomIntBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}//Here, we add 1 because random number produces the number between 0 and 1 and the maximum it will yeild is 0.999 adding 1 to it will give the maximum number and to round off the number to lie under the give range we wrap the code with Math.floor.
console.log(randomIntBetween(1,5));

//Tagged Template in Strings
function productDescription(string, productName, productPrice){
    console.log(string);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if (productPrice > 20){
        priceCategory = 'fairly priced';
    }
    // return `${string[0]}${productName}${string[1]}${priceCategory}${string[2]}`;
    return {name: productName, price: productPrice};
}
const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product ${prodName} is ${prodPrice}.`;
console.log(productOutput);
