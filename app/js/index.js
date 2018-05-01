import 'babel-polyfill';
// tab栏
let moreCour = document.getElementsByClassName('more_cour');
let courDiv = document.querySelectorAll('.cour_content');
let courAll = document.querySelectorAll('.cour_all')[0];

for(let j = 0; j< moreCour.length;j++){
  document.onmouseover = function(e){
    if(e.target.className =="more_cour"){
       e.target.nextElementSibling.style.display = "block";
    }
    else if(e.target.className=="cour_content"){
        e.target.style.display ="block";
    }
    else if(e.target.className == "c_a"){
      e.target.parentElement.style.display ="block";
    }
    else{
      courDiv[j].style.display = "none";
    }
  }
}

courAll.onmouseover = function(){
  this.children[1].style.display = "block";
}
courAll.onmouseout = function(){
  this.children[1].style.display = "none";
}
// slideshow
let prev = document.getElementsByClassName('prev')[0];
let next = document.getElementsByClassName('next')[0];

let banner = document.getElementsByClassName('banner')[0];
let imgLis = banner.querySelectorAll('li');
let controls = document.getElementsByClassName('controls')[0];
let spans = controls.querySelectorAll('span');
let hides = banner.querySelectorAll('.hide');
let banbox = document.getElementsByClassName('banner_box')[0];
let index = 0;

// background-color
let bgColor = ['#181e38','#ffd600','#452eb4','#ff998d','#171711','#121b73'];
imgLis[0].style.display = "block";

let timer = setInterval(play,3000);

for(let i=0;i<hides.length;i++){
  hides[i].style.display ="none"
}

banner.onmouseover = function(){
  for(let i=0;i<hides.length;i++){
    hides[i].style.display ="block"
  }
  clearInterval(timer);
}
banner.onmouseout = function(){
  for(let i=0;i<hides.length;i++){
    hides[i].style.display ="none"
  }
  timer = setInterval(play,3000);
}
prev.onclick = function(){
  if(index>0){
    imgLis[index].style.display ="none";
    imgLis[index-1].style.display = "block";
    index--;
  }else{
    imgLis[index].style.display = "none";
    index = imgLis.length-1;
    imgLis[index].style.display = "block";
  }
  now(index);
}

next.onclick = function(){
  console.log(index);
  if(index<imgLis.length-1){
    imgLis[index].style.display = "none";
    imgLis[index+1].style.display = "block";
    index++;
  }else{
    index = 0;
    imgLis[index].style.display = "block";
  }
  now(index);
}

function play(){
  if(index>=0&&index<spans.length-1){
    index++;
  }else{
    index = 0;
  }
  now(index);
}

function now(index){
  for(let i=0;i<spans.length;i++){
    spans[i].className ='';
    spans[index].className = "now";
    imgLis[i].style.display = "none";
    imgLis[index].style.display = "block";
    banbox.style.background = bgColor[index];
    spans[i].onmouseover = function(){
      for(let j=0;j<spans.length;j++){
        spans[j].className = '';
        imgLis[j].style.display = "none";
      }
      this.className = "now";
      imgLis[i].style.display = "block";
      banbox.style.background = bgColor[i];
    }
  }
}

// aside more

let more = document.getElementsByClassName('more')[0];
let aside = document.querySelectorAll('aside')[0];

more.onmouseover = function(){
    this.children[0].innerHTML = "<i class='iconfont icon-neo'></i>理学";
    this.children[0].href ="javascript:void(0)";
    this.parentElement.parentElement.style.height="546px";
  }

more.onmouseout = function(){
  more.children[0].innerHTML = "<i class='iconfont icon-more2'></i>更多";
  more.children[0].href ="#";
  this.parentElement.parentElement.style.height="380px";
}

// scroll top
window.onscroll = function(){
let fixedTop = document.getElementsByClassName('fixed_top')[0];
if(document.documentElement.scrollTop>100){
  fixedTop.style.display="block";
}else{
  fixedTop.style.display="none";
}

}
