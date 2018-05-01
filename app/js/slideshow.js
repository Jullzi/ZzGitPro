import "babel-polyfill";

let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementByClassName('next')[0];

let banner = document.getElementByClassName('banner')[0];
let imgLis = banner.querySelectorAll('li');

let controls = document.getElementByClassName('controls');
let spans = controls.quertSelectorAll('span');

imgLis[0].style.display = "block";

for(let i=0;i<imgLis.length;i++){
  imgLis[i].style.display = "none";
  prev(i);
}

function prev(index){
  prev.onclick = function(){
    if(index>0){
      imgLis[index].style.display ="none";
      imgLis[index-1].style.display = "block";
    }else{
      index = imgLis.length-1;
    }
  }
}
function next(index){
  next.onclick = function(){
    if(index<imgLis.length){
      imgLis[index].style.display = "none";
      imgLis[index+1].style.display = "block";
    }else{
      index = 0;
    }
  }
}
