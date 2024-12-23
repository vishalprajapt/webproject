

function singup(event){
    event.preventDefault()

    let name=document.singupform.name.value;
    let email=document.singupform.email.value;
    let pass=document.singupform.pass.value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',pass);
 window.location.href="file:///D:/fornted/index.html/index.html"
    
   
}


function login(e){
    e.preventDefault();

    let email=document.logoutform.email.value;
    let pass=document.logoutform.pass.value;


    let lemail=localStorage.getItem('email');
    let lpass =localStorage.getItem('password');
    if(email==lemail){
        if(pass==lpass){
           window.location.href="file:///D:/fornted/index.html/account.html"
        }
        else{
            alert("password not match")
        }
    }
    else{
        alert("email not match")
    }

}

function logouto(event){
    event.preventDefault()

   window.location.href="file:///D:/fornted/index.html/index.html"
}


function logoutc(event){
    event.preventDefault();

    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href="file:///D:/fornted/index.html/index.html"
    
}


// function alert(event){
//     event.preventDefault();
//     window.location.href="file:///D:/fornted/project/index.html"


// }
