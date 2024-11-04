function validation(){
    let user = document.getElementById("d1").value;
    let pass = document.querySelector("input[type=password]").value;
    if(user=="" || user==null){
        alert("Enter user name or password")
    }else if(pass==""|| pass==null){
        alert("Enter password")
    }else if(pass.length<8){
        alert("Password Requird Min 8 Character")
        
    }else{
        console.log(user)
        console.log(pass)
    }
}

