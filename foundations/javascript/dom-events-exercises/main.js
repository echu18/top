

// dom manipulation stuff
let container = document.getElementById('container');

let p = document.createElement('p');
p.style.color = 'red';
p.innerText = "Hey I'm red!";
container.appendChild(p);


let h = document.createElement('h3');
h.style.color = 'blue';
h.innerText = "I'm a blue h3!";
container.appendChild(h);

let div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

let divh = document.createElement('h1');
divh.innerText = "I'm in a div";
let divp = document.createElement('p')
divp.innerText = "ME TOO";


div.appendChild(divh);
div.appendChild(divp);

container.appendChild(div);




// event listener stuff

function doThing(e) {
  console.log(e)
}

// const btn = document.querySelector('#btn');
// btn.onclick = (e) => doThing(e)