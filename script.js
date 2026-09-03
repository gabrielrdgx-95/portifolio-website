const button = document.querySelector(".button-test")
const input = document.querySelector(".input-test")
const element = document.querySelector(".card-projeto")


button.addEventListener("click", function() {
    if (input.value === '') {
        element.innerHTML = "Projeto 1";
    } else {
        element.innerHTML = input.value;
    }
    
})
;

function checkBorder() {
    if (input.value === '') {
        input.style.border = "2.5px solid black";
    } else {
        input.style.border = "3px solid green";
    }
}

input.addEventListener('input', checkBorder);   
