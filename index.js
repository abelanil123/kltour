let flage=0;
let flagp=0;
function echeck(){
    let email=document.getElementById("email");
    let rege=/^([A-Za-z0-9\.-]+)@([A-Z0-9a-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(rege.test(email.value)){
        email.setAttribute("style","border:green solid 3px")
        flage=1;
    }
    else{
        email.setAttribute("style","border:red solid 3px");
        flage=0;;
    }
}

function pcheck(){
    let password=document.getElementById("password");
    let regp=/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/
    if(regp.test(password.value)){
        password=setAttribute("style","border:green solid 3px")
        flagp=1;
    }
    else{
        password.setAttribute("style","border:red solid 3px");
        flagp=0;
    }
}

function tcheck(){
    if(flage!=0 && flagp!=0){
        alert("login successfull");
        return true;
    }
    else if(flage==0 && flagp==0){
        alert("invalid email and password");
        return false;
    }
    else if(flage==0){
        alert("invalid email");
        return false;
    }
    else if(flagp==0){
        alert("invalid password");
        return false;
    }
}

function passpewer(){
let inputPassword4=document.getElementById("inputPassword4");
let passtren=document.getElementById("passtren");
if(inputPassword4.value.length>=8 && inputPassword4.value.length<12){
    passtren.innerText="Medium";
    passtren.style.color="orange";
    inputPassword4.style.border="orange solid 3px";
}
else if(inputPassword4.value.length>=12){
    passtren.innerText="Strong";
    passtren.style.color="green";
    inputPassword4.style.border="green solid 3px";
}
else{
    passtren.innerText="Short";
    passtren.style.color="red";
    inputPassword4.style.border="red solid 3px";
}
}

function valid()
{
    let em = document.getElementById("inputEmail4");
    let pass=document.getElementById("inputPassword4");
    let ph=document.getElementById("num");
    let regem=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regpass=/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
    let regphone=/^([0-9]{3})([-.' ']{1})([0-9]{3})([-.' ']{1})([0-9]{4})$/;
    if (regem.test(em.value))
    {
        if(regphone.test(ph.value))
        {
            if(regpass.test(pass.value))
            {
                    return true;
                
            }
            else
            {
                pass.style.border="2px solid red";
                pass.setAttribute("placeholder","Invalid format");
                alert("Password must contain atleast 1 uppercase alphabet, 1 lowercase alphabet and 1 number.")
                return false;
            }
        }
        else
        {
            ph.style.border="2px solid red";
            ph.setAttribute("placeholder","Invalid format");
            return false;
        }
    }
    else
    {
        em.style.border="2px solid red";
        alert("Invalid email");
        em.setAttribute("placeholder","Invalid format");
        return false;
    }
}

