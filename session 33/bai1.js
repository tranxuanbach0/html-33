let inputs=document.getElementById("password");
let bn=document.getElementById("btn");
bn.onclick=function(){
    if(inputs.type=="text"){
        inputs.type="password";
    }else{
        inputs.type="text";
    }
}