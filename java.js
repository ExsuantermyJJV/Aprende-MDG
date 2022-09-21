var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

// var theParent = document.querySelector(".container");
document.addEventListener("click", myFunction);
var nts = document.querySelectorAll(".box");
       for (const n of nts) {
         n.addEventListener("click", doSomething);}

function myFunction(e){
  var clickedItem = e.target;
  if(clickedItem.className === "box"){
    var nts = document.querySelectorAll(".box");
       for (const n of nts) {
         n.addEventListener("click", doSomething);}
  }else{
    var nts = document.querySelectorAll(".box");
    for(const n of nts){
      n.children[1].className = "content content-min";
    }
  }
}


function doSomething(e){
  var x = e.target;
   var buttons = document.querySelectorAll(".box")
       for (const button of buttons) {
        if(button != this){
          button.children[1].className = "content content-min";
        }else{
          if(e.target.children[1].classList.contains("content-min")){
            e.target.children[1].className = "content content-max";
          }else{
            e.target.children[1].className = "content content-min";
          }
        }
      }
} 
