console.log('Lection_14');


window.onload = function(){
    var item = document.querySelector('.block')

    // item.style.color = "red";
    // item.style.fontSize = '18px';

    // setTimeout(function(){
    //     item.classList.add('animate');
    // }, 1000)
    // console.log(item.style);


    // events
    // console.dir(item)
    // click

    // add event handler
    // item.onclick = foo;

    // remove event handler

    item.onclick = null;

    function foo(event){
        // event = объект события
        console.log(event);
        console.log(this == event.target)
        event.target.classList.add('animate');
    }


    // --------------------------------------


    function handler(event){
        console.log(event.type, event)
    }


    // item.onclick = handler;
    // item.onmouseover = handler;
    // item.onmouseout = handler;
    // item.onmousemove = handler;
    item.onmousedown = handler;
    item.onmouseup = handler;

    // --------------------------------------


    // item.onclick = function(ev){
    //     handler(ev);
    //     handler2(ev);
    // }

    // --------------------------------------

    // item.onclick = function(){}

    // item.addEventListener('click', function(ev){
    //     console.log(this==ev.target)
    // });

    // item.addEventListener('click', function(ev){
    //     console.log('handler 2')
    // });

}