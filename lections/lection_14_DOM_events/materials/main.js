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
    // item.onmousedown = handler;
    // item.onmouseup = handler;

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




var flag = false;
    item.addEventListener('mousedown', function(ev){
        flag = true;
        var startX = ev.clientX;
        var startY = ev.clientY;

        var itemX = this.offsetLeft;
        var itemY = this.offsetTop;

        document.addEventListener('mousemove', onMouseMove);

        function onMouseMove(event){
            if (!flag) return;
            var curX = event.clientX;
            var curY = event.clientY;


            item.style.left = itemX + (curX - startX) + 'px';
            item.style.top = itemY + (curY - startY) + 'px';
        }


        ev.target.addEventListener('mouseup', function(){
            flag = false;
            document.removeEventListener('mousemove', onMouseMove)
        })
    })
}