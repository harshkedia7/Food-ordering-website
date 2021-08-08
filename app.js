function validation(){


var name=document.getElementById("name").value;
var lname=document.getElementById("last_name").value;
var contact=document.getElementById("number").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("password").value;
var cpass=document.getElementById("cpassword").value;

var regx=  /^[a-zA-Z ]+$/;
var regx1=/^[a-zA-Z ]+$/;
var regx2=/^[6-9]\d{9}$/;
var regx3=/^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regx4=/^(?=.*[0-9]).{8,}$/;

  if(name.match(regx))
  {
    document.getElementById("lbluser").style.visibility="hidden";
   
  }
  else
  {
    document.getElementById("lbluser").style.visibility="visible";
   
  }

  if(regx1.test(lname))
  {
    
    document.getElementById("last_lbluser").style.visibility="hidden";
  }
  else
  {
    document.getElementById("last_lbluser").style.visibility="visible";

  }
  
  if(regx2.test(contact))
  {
    document.getElementById("c_lbluser").style.visibility="hidden";
   
  }
  else
  {
    document.getElementById("c_lbluser").style.visibility="visible";
  
  }

  if(email.match(regx3))
  {
    document.getElementById("e_lbluser").style.visibility="hidden"; 
  }
  else
  {
    document.getElementById("e_lbluser").style.visibility="visible";
  }

  if(pass.match(regx4))
  {
    document.getElementById("p_lbluser").style.visibility="hidden"; 
  }
  else
  {
    document.getElementById("p_lbluser").style.visibility="visible";
  }

  if(cpass!=pass){
    alert("Password do not match");
    // document.getElementById("cp_lbluser").style.visibility="visible";
    // document.getElementById("cp_lbluser").style.visibility="visible";
  }

     

  }
 
