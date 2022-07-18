let initialValue = "X"
const test=(e)=>{
    // console.log(e);
    // e.target.innerText = ""
    // xPlay = e.target.innerText
    if (initialValue=="X" && e.target.innerText==""){
        e.target.innerText = "X"
        initialValue = "O"
    }
    else if(initialValue=="O" && e.target.innerText==""){
        e.target.innerText = "O"
        initialValue = "X"
    }
   
}