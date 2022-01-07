
// *************** LOG-IN Validation ****************

function name_validation (name){
    var valid=true
    var letterNumber = /^[0-9a-zA-Z_]{6,20}$/
    if(!(name.match(letterNumber))){
        document.getElementById('usernameValid').style.visibility='visible'
        document.getElementById('username').value = ""
        valid = false
    }else{
        document.getElementById('usernameValid').style.visibility='hidden'
        valid = true
    }
    return valid;
}
function password_validation (pw){
    valid = true
    var valid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    if( !(pw.match(valid))) {
        document.getElementById('passwordValid').style.visibility='visible'
        document.getElementById('password').value = ""
        valid = false
    }else{
        document.getElementById('passwordValid').style.visibility='hidden'
        valid = true
    }
    return valid;
}

function loginValidate(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    if(name_validation(username) && password_validation(password)){
        window.location='member.html'
    } 
}