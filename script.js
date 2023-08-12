let add = document.querySelector("#add");
let substract = document.querySelector("#substract");
//console.log(add, susstract);
add.addEventListener("click", function () {
    //alert("le diste click al boton sumar")
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText)+ 1;
    output.innerText = result;
    if(output.innerText >9){
        output.innerText = 0;
    }

    
}); 

substract.addEventListener("click", function () {
    
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText)- 1;
    output.innerText = result;
    if(output.innerText <0){
        output.innerText = 0;
    }

    
}); 
