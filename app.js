let button = document.querySelector("#button")

let todolist = document.getElementById("todolist")

let input = document.getElementById("input")

let arr = []

button.onclick = function(){

    arr.push(input.value)
    input.value = ""
    console.log(arr)
    appendList()
}

function appendList(){
todolist.innerHTML = null
    for(let i=0;i<arr.length;i++){

        // let new_list = document.createElement("li")
        // new_list.innerText = arr[i]
        // toDOList.append(new_list)

        // todolist.innerHTML += "<li>" + arr[i] + "</li>"
        todolist.innerHTML += `<li> ${arr[i]} <a onclick = editlist(${i})>Edit</a><a onclick = deletelist(${i})>X</a> </li>`
        // todolist.innerHTML += `<li> ${arr[i]} </li>`
    }
}

// Edit functionality

function editlist(index){
    let editedText = prompt("The New Title")
    if(editedText !=null && editedText!=""){
        arr[index] = editedText
        appendList()
    }
}

//delete functionality

function deletelist(index){
    let Conformdeleted = confirm("Are you sure?")
    if (Conformdeleted) {
        arr.splice(index,1)
        appendList()
    }
    
}

