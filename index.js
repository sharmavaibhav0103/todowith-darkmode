
//declaring constants
const mode = document.querySelector('.fa-adjust');
const form = document.querySelector('.todo-form');
const todo = document.querySelector('.todo-text');
const submitBtn = document.querySelector('.btn-submit');
const list = document.querySelector('.list-container');

//Mode changer
mode.addEventListener('click',function(){
     const cr = getComputedStyle(document.documentElement)
     .getPropertyValue('--bgColor');
   
     if(cr.trim() === 'black')
        changeToWhite();
     else if(cr.trim() === 'white')     
        changeToBlack();    
})

function changeToWhite(){
    document.documentElement.style.setProperty('--formColor', '#f3f3f4');
    document.documentElement.style.setProperty('--bgColor', 'white');
    document.documentElement.style.setProperty('--submitBtnColor', '#ffa351ff');
    document.documentElement.style.setProperty('--listColor', '#ffa351ff');
    document.documentElement.style.setProperty('--colorWhite', 'black');
    document.documentElement.style.setProperty('--submitBtnTextColor', 'black');

    const is = document.querySelectorAll('.fa-check, .fa-trash');
    if(is.length > 0) {
    is[0].style.backgroundColor = 'lightgreen';
    is[0].style.color = 'black';
    is[1].style.backgroundColor = 'red';
    is[1].style.color = 'black';}
}

function changeToBlack(){
    document.documentElement.style.setProperty('--bgColor', 'black');
    document.documentElement.style.setProperty('--formColor', '#191919');
    document.documentElement.style.setProperty('--submitBtnColor', '#333333');
    document.documentElement.style.setProperty('--listColor', '#2d283e');
    document.documentElement.style.setProperty('--colorWhite', 'white');
    document.documentElement.style.setProperty('--submitBtnTextColor', 'rgb(170, 165, 165)');

    const is = document.querySelectorAll('.fa-check, .fa-trash');
    if(is.length > 0){
    is[0].style.backgroundColor = '#2d283e';
    is[0].style.color = 'gray';
    is[1].style.backgroundColor = '#2d283e';
    is[1].style.color = 'gray';}
}

//Adding a note
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    let node = document.createElement('li');
    p.appendChild(document.createTextNode(todo.value));
    node.appendChild(p);
    node.appendChild(document.createElement('i')).className = "fas fa-check";
    node.appendChild(document.createElement('i')).className = "fas fa-trash";
    list.appendChild(node);
    todo.value = '';

    check();
    removeItem();
});

function check() {
    let checked = document.querySelectorAll('.fa-check');
    for(var i = 0; i < checked.length; i++) {
        checked[i].addEventListener('click', (e) => {
            e.target.style.display = 'none';
            let parent = e.target.parentElement.style;
            parent.backgroundColor = '#191919';
            parent.color = 'black';
            parent.textDecoration = 'line-through';
        })
    }
}

function removeItem(){
    let trash = document.querySelectorAll('.fa-trash');
    for(var i=0; i<trash.length; i++){
        trash[i].addEventListener('click', (e) => {
            let parent = e.target.parentElement;
            parent.className = 'animate';
            parent.addEventListener('transitionend',(e) => {
                e.target.style.display = 'none';
            });
        })  
    }
}
