
const btn = document.getElementById("bg-color")

 const colors =[ 'red', "blue", "green", "purple", "orange", "pink", "yellow"];

 let index = 0 ;

 btn.addEventListener("click" , function(event){
    event.preventDefault();
    document.body.style.backgroundColor  = colors[index];
    index ++ ;
    if(index>=colors.length){
        index=0
    }
 })


document.getElementById("frist-btn").addEventListener("click", function(event){
    event.preventDefault();
   
  const numberDelete = deleteNumber("delete-num")

 const add  =  addedNumbr("add-num");
 
 const div = document.createElement("div")
 div.innerHTML = `
    <h1>you click first button</h1>
    
    
 `
 const html =document.getElementById("add-html");
 html.appendChild(div)

})

document.getElementById("second-btn").addEventListener("click", function(event){
    event.preventDefault();
    const add = addedNumbr("add-num");
    const numberDelete = deleteNumber("delete-num");

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>you click second button</h2>`

    const addHtml = document.getElementById("add-html");
    addHtml.appendChild(div)
})

document.getElementById("third-btn").addEventListener("click", function(event){
    event.preventDefault();
    const add = addedNumbr("add-num");
    const numberDelete = deleteNumber("delete-num");

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>you click third-btn button</h2>`

    const addHtml = document.getElementById("add-html");
    addHtml.appendChild(div)
})

document.getElementById("fourth-btn").addEventListener("click", function(event){
    event.preventDefault();
    const add = addedNumbr("add-num");
    const numberDelete = deleteNumber("delete-num");

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>you click "fourth-btn" button</h2>`

    const addHtml = document.getElementById("add-html");
    addHtml.appendChild(div)
})

document.getElementById("fifth-btn").addEventListener("click", function(event){
    event.preventDefault();
    const add = addedNumbr("add-num");
    const numberDelete = deleteNumber("delete-num");

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>you click fifth-btn button</h2>`

    const addHtml = document.getElementById("add-html");
    addHtml.appendChild(div)
})

document.getElementById("sixth-btn").addEventListener("click", function(event){
    event.preventDefault();
    const add = addedNumbr("add-num");
    const numberDelete = deleteNumber("delete-num");

    const div = document.createElement("div");
    div.innerHTML = `
    <h2>you click sixth-btn button</h2>`

    const addHtml = document.getElementById("add-html");
    addHtml.appendChild(div)
})






document.getElementById("Clear").addEventListener("click",function(event){
    event.preventDefault();
  const history = document.getElementById("add-html");
  history.innerText = " "
})
 
