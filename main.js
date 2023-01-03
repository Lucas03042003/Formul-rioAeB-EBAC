const form = document.getElementById("form");
const numrA = document.getElementById("A");
const numrB = document.getElementById("B");

function valido(a, b){
    let tamA = a.split("").length; 
    let tamB = b.split("").length;
    if(tamA>tamB){
        return false;
    }else{
        if(tamA == tamB){
            return b > a;
        }else{
            return true;
        }
    }
    
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    let formEValido = false;
    
    formEValido = valido(numrA.value, numrB.value);
    if(formEValido){
        alert("Informações enviadas com sucesso");
        numrA.value = '';
        numrB.value = '';
    }else{
        numrA.classList.add('error');
        numrB.classList.add('error');
        document.querySelector(".btn-error").innerHTML = 'A deve ser menor que B: ' + numrA. value + " é maior ou igual a " + numrB.value;
        document.querySelector(".btn-error").style.display = "block";
    }
})

form.addEventListener("keyup",function(e){
    e.preventDefault();
    let formEValido = false;
    
    formEValido = valido(numrA.value, numrB.value);
    if(formEValido){
        numrA.classList.remove('error');
        numrB.classList.remove('error');
        document.querySelector(".btn-error").innerHTML = '';
        document.querySelector(".btn-error").style.display = "none";   
    }else{
        if(numrA.value === ''){
            numrA.classList.remove('error');
            numrB.classList.remove('error');
            document.querySelector(".btn-error").innerHTML = '';
            document.querySelector(".btn-error").style.display = "none";  
        }else{
            if(numrB.value === ''){
                numrA.classList.remove('error');
                numrB.classList.remove('error');
                document.querySelector(".btn-error").innerHTML = '';
                document.querySelector(".btn-error").style.display = "none";  
            }else{
                numrA.classList.add('error');
                numrB.classList.add('error');
                document.querySelector(".btn-error").style.display = "block";
                document.querySelector(".btn-error").innerHTML = 'A deve ser menor que B: ' + numrA. value + " é maior ou igual a " + numrB.value;
            }
        }
    }
})