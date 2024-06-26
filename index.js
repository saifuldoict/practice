const task = document.getElementById("task");
const imoprtance = document.getElementById("imoprtance");
const btn = document.getElementById("btn");
var ul =document.querySelector("ul");
var error =document.querySelector("h1");
      
let alltask = [];


btn.addEventListener("click", function(){

    if(task.value == ""){
        error.innerHTML = "task value required"
    }else if(imoprtance.value == ""){
        error.innerHTML = "importance valu required"
    }else{

        error.innerHTML = ""
        ul.innerHTML = ""
    
        alltask.push({
        taskname: task.value,
        imoprtance: imoprtance.value,
    });
    for(i =0; i<=alltask.length; i++){
        
        ul.innerHTML += `<li>${alltask[i].taskname } ---${alltask[i].imoprtance} </li>`}
        
    } 
    
});


