/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/


// console.log(document);

// 1. выбрать элемент


window.onload = function(){
    // var elem = document.getElementById('block');

    // // console.dir(elem);

    // // console.log(elem.id);


    // var elems = document.getElementsByClassName('example');
    // // console.log(elems);

    // for(var i = 0; i < elems.length; i++){
    //     // console.log(elems[i].id);
    // }

    // // --------------------------------
    // // selector

    // blockItem = document.querySelector('#block');
    // var blocks = document.querySelectorAll('.block');


    // console.dir(blockItem);

    // console.log(blockItem.innerHTML)
    // // setTimeout(function(){
    // //     blockItem.innerHTML += '!';
    // // },2000)

    // blockItem.innerHTML += '!';
    // for(var i = 0; i < blocks.length; i++){
    //     blocks[i].innerHTML += '!'
    // }

    // // --------------------------------
    // // class
    
    // // blockItem.className += ' ss foo bar';
    // blockItem.classList.add('ss', 'foo');

    // blockItem.classList.remove('foo');
    // // blockItem.classList.toggle('hide');
    // blockItem.style.backgroundColor = "#abecbe";

    // blockItem.style.left = 300+"px";
    // blockItem.style.top = "200px";


    var elems = document.querySelectorAll('.block-item');

    setInterval(function(){
        for(var i = 0; i < elems.length; i++){
            elems[i].style.width = getR(0, 300) + 'px';
            elems[i].style.height = getR(0, 300) + 'px';
            
            var dHeight = window.innerHeight - elems[i].clientHeight;
            var dWidth = window.innerWidth - elems[i].clientWidth;
            elems[i].style.left = getR(0, dWidth) + 'px';
            elems[i].style.top = getR(0, dHeight) + 'px';
            elems[i].style.backgroundColor = 'rgb(' + getR(0, 256)+', '+getR(0, 256)+', '+getR(0, 256)+')';
        }
    }, 500);


}

function getR(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}



