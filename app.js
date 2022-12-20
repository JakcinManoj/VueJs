const inputs = document.querySelector('input');
const uls = document.querySelector('ul');
const buttons = document.querySelector('button');
console.log(inputs);
console.log(uls);
console.log(buttons);

function fun() {
    const enteredval = inputs.value;
    const listele = document.createElement('li');
    listele.textContent = enteredval;
    uls.appendChild(listele);
    inputs.value=' ';
}

buttons.addEventListener("click",fun);