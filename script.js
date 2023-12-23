let outputscreen = document.getElementById("result");
function display(num){
    outputscreen.value  += num;
}
function calculate(){
    try{
        outputscreen.value =eval(outputscreen.value);
    }
    catch(err){
        alert("Invalid number");
    }

}
// function clear(){
//     outputscreen.value='';
// }

function clearElement(element) {
    document.getElementById(element).value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}
function add(num){
    outputscreen.value = outputscreen.value + num;
    
}
