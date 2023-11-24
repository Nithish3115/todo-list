const input_box=document.getElementById("input-box");
const list_container=document.getElementById("list-container");

function addTask(){
    if(input_box.value === ''){
        alert("You Must Enter something");
    }else{
        let li= document.createElement("li");
        li.innerHTML=input_box.value;
        list_container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value ="";
    savedata();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    }, false);


// function savedata(){
//         localStorage.setItem("data", list_container.innerHTML1);
//     }
// function show(){
//         list_container.innerHTML=localStorage.getItem("data");
//         console.log(list_container.innerHTML=localStorage.getItem("data")
//         );
//     }
//  show();



