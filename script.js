function validate(){
var contact=document.getElementById("number").value;
var email=document.getElementById("email").value;
var pass=document.getElementById("password").value;

var regx2=/^[6-9]\d{9}$/;
var regx3=/^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var regx4=/^(?=.*[0-9]).{8,}$/;

if(regx2.test(contact))
  {
    document.getElementById("c_lbluser").style.visibility="hidden";
    // return true;
   
  }
  else
  {
    document.getElementById("c_lbluser").style.visibility="visible";
    // return false;
  
  }

  if(regx3.test(email))
  {
    document.getElementById("e_lbluser").style.visibility="hidden"; 
    // return true;
  
  }
  else
  {
    document.getElementById("e_lbluser").style.visibility="visible";
    // return false;
  
  }

  if(pass.match(regx4))
  {
    document.getElementById("p_lbluser").style.visibility="hidden";
    // return true;
   
  }
  else
  {
    document.getElementById("p_lbluser").style.visibility="visible";
    // return false;
  
  }
}

// Feedback
const stars=document.querySelector(".ratings").children;
const ratingValue=document.querySelector("#rating-value");
let index;

for(let i=0; i<stars.length;i++){
  stars[i].addEventListener("mouseover",function(){
    for(let j=0;j<stars.length;j++){
      stars[j].classList.remove("fa-star");
      stars[j].classList.add("fa-star-o");
    }
    for(let j=0;j<=i;j++){
      stars[j].classList.remove("fa-star-o");
      stars[j].classList.add("fa-star");
    }
  })
  stars[i].addEventListener("click",function(){
    ratingValue.value=i+1;
  })
  stars[i].addEventListener("mouseout",function(){
    for(let j=0;j<stars.length;j++){
      stars[j].classList.remove("fa-star");
      stars[j].classList.add("fa=star-o");
    }
    for(let j=0;j<=i;j++){
      stars[j].classList.remove("fa=star-o");
      stars[j].classList.add("fa-star");
    }
  })

}
function save(){
  alert("Do you want to save");
}




















