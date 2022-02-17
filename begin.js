let span = document.getElementById("chain");
let Sto = document.getElementById("stop");
let Cont = document.getElementById("cont");
let inp = document.getElementById("get");
let backg = document.querySelector(".back");
let dli = document.querySelector(".menu");
let get = document.querySelector(".menu");


function change(){
  let color = "#";
  color += Math.random().toString(16).slice(2,8);
  span.innerHTML = color;
  document.body.style.background = color;
}


function auto(){
  if(dli.style.display === "none"){
    dli.style.display = 'block';
  }
  else{
    dli.style.display = 'none';
  }
}

function one(){
  var int = setInterval(first,200);
  dli.style.display = 'none';
  Sto.style.display = 'block';
  Cont.style.display = 'none';
  function first(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    span.innerHTML = color;
    document.body.style.background = color;
  }
  Sto.onclick = () => {
    clearInterval(int);
    span.innerHTML = '';
    document.body.style.background = 'white';
    Sto.style.display = 'none';
    Cont.style.display = 'block';
  }
}

function two(){
  var liss = setInterval(first,500);
  dli.style.display = 'none';
  Sto.style.display = 'block';
  Cont.style.display = 'none';
  function first(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    span.innerHTML = color;
    document.body.style.background = color;
  }
  Sto.onclick = () => {
    clearInterval(liss);
    span.innerHTML = '';
    document.body.style.background = 'white';
    Sto.style.display = 'none';
    Cont.style.display = 'block';
  }
}

function three(){
  var liss = setInterval(first,1000);
  dli.style.display = 'none';
  Sto.style.display = 'block';
  Cont.style.display = 'none';
  function first(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    span.innerHTML = color;
    document.body.style.background = color;
  }
  Sto.onclick = () => {
    clearInterval(liss);
    span.innerHTML = '';
    document.body.style.background = 'white';
    Sto.style.display = 'none';
    Cont.style.display = 'block';
  }
}

function four(){
  var liss = setInterval(first,5000);
  dli.style.display = 'none';
  Sto.style.display = 'block';
  Cont.style.display = 'none';
  function first(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    span.innerHTML = color;
    document.body.style.background = color;
  }
  Sto.onclick = () => {
    clearInterval(liss);
    span.innerHTML = '';
    document.body.style.background = 'white';
    Sto.style.display = 'none';
    Cont.style.display = 'block';
  }
}

function costume(){
  var liss = setInterval(first,inp.value);
  dli.style.display = 'none';
  Sto.style.display = 'block';
  Cont.style.display = 'none';
  function first(){
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    span.innerHTML = color;
    document.body.style.background = color;
  }
  Sto.onclick = () => {
    clearInterval(liss);
    span.innerHTML = '';
    document.body.style.background = 'white';
    Sto.style.display = 'none';
    Cont.style.display = 'block';
  }
}



// var intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

// setTimeout(alert, 1000); // Will alert once, after a second.
// setInterval(function(){ 
// 	console.log("Oooo Yeaaa!");
// }, 2000);

