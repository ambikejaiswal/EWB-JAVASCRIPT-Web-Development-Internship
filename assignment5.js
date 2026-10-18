function rectangleArea(length =5 , width = 4){
    return length * width;
} 

const arrowRectangleArea=(length = 5 , width = 4) => {
    return length * width;
}

console.log("Standard Function Area (Default 5*4):",rectangleArea());

console.log("Arrow Function Area (Custom 5*4):",arrowRectangleArea(10,3));

// Function Scope
function showFunctionScope() {
    var message = "Function scope example";
    console.log(message);
}

showFunctionScope();

// Block Scope
{
    let blockMessage = "Block scope example";
    console.log(blockMessage);
}